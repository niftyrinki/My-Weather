var request = require('request');

var route = function (app) {
  app.get('/weather', function(req, res) {
    request.get({
      url: "http://api.openweathermap.org/data/2.5/weather",
      qs: {
        lat: req.query.lat,
        lon: req.query.lng,
        appid: 'bb7e32d2bd79b5c05b67ed69fe904ebf',
        _: '234234f',
      },
    }, function(error, response, body) { 
        if (!error && response.statusCode === 200) { 
          res.json(JSON.parse(body));
        } else {
          res.sendStatus(500);
        }
      }); 
   });
 }

 module.exports = route;
