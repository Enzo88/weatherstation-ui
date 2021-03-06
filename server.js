//Install express server

const express = require('express');
const path = require('path');
const WeatherData = require('./WeatherData.js')
const WeatherDataDAO = require('./WeatherDataDAO.js')
const Pool = require('pg').Pool

process.env.TZ = 'Europe/Rome' 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Weather-ui'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/Weather-ui/index.html'));
});

app.use(express.json())

app.post('/api/sendWeatherData/:deviceId', (req, res) => {  
  let currentWeather = WeatherData.fromJson(req.body);
  let weatherDao = new WeatherDataDAO(pool);
  weatherDao.saveData(currentWeather, req.params.deviceId).then((success) => {
    return res.json(currentWeather);
  });
});

app.get('/api/getWeatherState/:deviceId', (req, res) => {  
  return res.json({state: "Sunny"});
});

app.get('/api/getCurrentTemp/:deviceId', (req, res) => {
  let weatherDao = new WeatherDataDAO(pool);
  weatherDao.getCurrentTemp(req.params.deviceId).then((success) => {
    return res.json({temp: success})
  });
});

app.get('/api/getLastUpdate/:deviceId', (req, res) => {
  let weatherDao = new WeatherDataDAO(pool);
  weatherDao.getLastUpdate(req.params.deviceId).then((success) => {
    return res.json({updateDate: success})
  });
});

app.get('/api/getCurrentHum/:deviceId', (req, res) => {
  let weatherDao = new WeatherDataDAO(pool);
  weatherDao.getCurrentHum(req.params.deviceId).then((success) => {
    return res.json({hum: success})
  });  
});

app.get('/api/getCurrentPressure/:deviceId', (req, res) => {
  let weatherDao = new WeatherDataDAO(pool);
  weatherDao.getCurrentPressure(req.params.deviceId).then((success) => {
    return res.json({pressure: success})
  });
});

app.get('/api/getMaxTemp/:deviceId', (req, res) => {
  return res.json({maxTemp: 10});
});

app.get('/api/getMinTemp/:deviceId', (req, res) => {
  return res.json({minTemp: 10});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);