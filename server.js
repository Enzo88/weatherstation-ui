//Install express server

const express = require('express');
const path = require('path');
const WeatherData = require('./WeatherData.js')
const WeatherDataDAO = require('./WeatherDataDAO.js')
const Pool = require('pg').Pool

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
  weatherDao.saveData(currentWeather, req.params.deviceId);
  return res.json(currentWeather);
});

app.get('/api/getWeatherState/:deviceId', (req, res) => {
  return res.json({state: "Sunny"});
});

app.get('/api/getCurrentTemp/:deviceId', (req, res) => {
  return res.json({temp: 10});
});

app.get('/api/getCurrentHum/:deviceId', (req, res) => {
  return res.json({hum: 10});
});

app.get('/api/getCurrentPressure/:deviceId', (req, res) => {
  return res.json({pressure: 10});
});

app.get('/api/getMaxTemp/:deviceId', (req, res) => {
  return res.json({maxTemp: 10});
});

app.get('/api/getMinTemp/:deviceId', (req, res) => {
  return res.json({minTemp: 10});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);