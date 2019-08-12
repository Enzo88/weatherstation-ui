//Install express server

const express = require('express');
const path = require('path');
const WeatherData = require('./WeatherData.js')

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Weather-ui'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/Weather-ui/index.html'));
});

app.use(express.json())

app.post('/api/sendWeatherData/:deviceId', (req, res) => {  
  let current = WeatherData.fromJson(req.body);  
  return res.json(current);
});

app.get('/api/getCurrentWeather/:deviceId', (req, res) => {
    return res.send('Received a POST HTTP method'+req.params.deviceId);
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);