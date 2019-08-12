import time

import board
import busio
import adafruit_bme280
import requests

# Create library object using our Bus I2C port
i2c = busio.I2C(board.SCL, board.SDA)
bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c)

# Change this to match the location's pressure (hPa) at sea level
bme280.sea_level_pressure = 1013.25
bme280.mode = adafruit_bme280.MODE_NORMAL
bme280.standby_period = adafruit_bme280.STANDBY_TC_500
bme280.iir_filter = adafruit_bme280.IIR_FILTER_X16
bme280.overscan_pressure = adafruit_bme280.OVERSCAN_X16
bme280.overscan_humidity = adafruit_bme280.OVERSCAN_X1
bme280.overscan_temperature = adafruit_bme280.OVERSCAN_X2
# The sensor will need a moment to gather initial readings
time.sleep(1)

url = 'https://weather-station-ui.herokuapp.com/api/sendWeatherData/1'

while True:
    #print("\nTemperature: %0.1f C" % bme280.temperature)
    #print("Humidity: %0.1f %%" % bme280.humidity)
    #print("Pressure: %0.1f hPa" % bme280.pressure)
    #print("Altitude = %0.2f meters" % bme280.altitude)
    data = {"temperature": bme280.temperature, "humidity": bme280.humidity,"pressure": bme280.pressure}
    try:
        response = requests.post(url, json=data)
    except:
        pass
    #print(response)
    time.sleep(60)