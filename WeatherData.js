class WeatherData {
    constructor(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }

    static fromJson({temperature, humidity, pressure}) {                
        return new WeatherData(temperature, humidity, pressure);
    }
}

module.exports = WeatherData;