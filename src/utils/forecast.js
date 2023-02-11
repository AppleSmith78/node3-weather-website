const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ef04d616cad8148f67d056f7f1a07acf&query=' + latitude + ',' + longitude + '&units=f'

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined)
    } else if (body.error) {
      callback('Unable to find location.  Try another search', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ', and it feels like ' + body.current.feelslike + '.  Wind speed is: ' + body.current.wind_speed + 'mph, and it is coming from the ' + body.current.wind_dir + '.')
    }
  })
}

module.exports = forecast