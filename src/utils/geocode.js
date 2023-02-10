const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic21pdGh3azE5NzgiLCJhIjoiY2xkbnpuMDRoMG9sNjNubWR1MDVvc25nbiJ9.wvP_9YGLOTJY7r6D_xmZpw'

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location.  Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode