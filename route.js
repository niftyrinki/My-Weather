
var request = require('request');
var SoundCloudAPI = require("soundcloud-node");

var route = function (app) {
	app.get('/search', function(req, res) {
		request.get({ url: "api.openweathermap.org/data/2.5/weather?id=2172797" }, function(error, response, body) { 
			if (!error && response.statusCode === 200) { 
          		res.json(JSON.parse(body)); 
            } 
      }); 
   });
 }

 module.export = routes;
