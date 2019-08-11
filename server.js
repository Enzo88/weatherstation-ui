//Install express server

const WeatherData = require('./WeatherData.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Weather-ui'));
app.use(bodyParser.json());

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/Weather-ui/index.html'));
});

app.post('/api/sendWeatherData/:deviceId', (req, res) => {
  let currentWeather = new WeatherData()  
  return res.send(request.body);
});

app.get('/api/getCurrentWeather/:deviceId', (req, res) => {
    return res.send('Received a POST HTTP method'+req.params.deviceId);
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);