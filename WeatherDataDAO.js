const WeatherData = require('./WeatherData.js')

class WeatherDataDAO {
    constructor(pool) {
        this.pool = pool;        
    }

    saveData(currentWeather, device_id) {
        let currentDate = new Date().toISOString();
        return new Promise((resolve, reject) => {
            this.pool.query('UPDATE current_temperature set temperature = $1, humidity = $2, pressure = $3, updateDate = $5 where device_id = $4', 
            [currentWeather.temperature, currentWeather.humidity, currentWeather.pressure, device_id, currentDate], (error, results) => {
            if (error) {
                throw error;
            } else {
                resolve(true);
            }
          });
        });
    }

    getWeatherState(device_id) {
        
    }
      
    getCurrentTemp(device_id) {
        return new Promise((resolve, reject) => {
            this.pool.query('select temperature from current_temperature where device_id = $1', 
            [device_id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    resolve(results.rows[0].temperature);
                }
            });
        });
    }

    getCurrentHum(device_id) {
        return new Promise((resolve, reject) => {
            this.pool.query('select humidity from current_temperature where device_id = $1', 
            [device_id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    resolve(results.rows[0].humidity);
                }
            });
        });
    }

    getCurrentPressure(device_id) {
        return new Promise((resolve, reject) => {
            this.pool.query('select pressure from current_temperature where device_id = $1', 
            [device_id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    resolve(results.rows[0].pressure);
                }
            });
        });
    }

    getMaxTemp(device_id) {
       
    }

    getMinTemp(device_id) {
       
    }

    getLastUpdate(device_id) {
        return new Promise((resolve, reject) => {
            this.pool.query('select updatedate from current_temperature where device_id = $1', 
            [device_id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    resolve(results.rows[0].updatedate);
                }
            });
        });
    }
}

module.exports = WeatherDataDAO;