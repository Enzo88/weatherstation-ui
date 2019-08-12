const WeatherData = require('./WeatherData.js')

class WeatherDataDAO {
    constructor(pool) {
        this.pool = pool;        
    }

    saveData(currentWeather, device_id) {
        this.pool.query('UPDATE current_temperature set temperature = $1, humidity = $2, pressure = $3 where device_id = $4', 
        [currentWeather.temperature, currentWeather.humidity, currentWeather.pressure, device_id], (error, results) => {
            if (error) {
              throw error;
            } else {
                return true;
            }
          });
    }
}

module.exports = WeatherDataDAO;