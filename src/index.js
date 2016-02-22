const request = require('request')

class Claydol {
  get (type, resource, limit = 20, offset = 0) {
    return new Promise((resolve, reject) => {
      if (typeof resource === 'number') resource = resource.toString()
      if (typeof resource !== 'string') reject('Invalid Resource.')
      if (resource !== '') resource = '/' + resource
      limit = limit.toString()
      request(`http://pokeapi.co/api/v2/${type}${resource}?limit=${limit}`, (err, res, body) => {
        if (err || res.statusCode != 200) {
          reject('Invalid Request.')
        } else {
          resolve(body)
        }
      })
    })
  }
}

module.exports = Claydol
