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

app.get('/api/getCurrentWeather/:deviceId', (req, res) => {
    return res.send('Received a POST HTTP method'+req.params.deviceId);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);