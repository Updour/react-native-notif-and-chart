var https = require('https')
var ViewApp = function(data) {
	var headers = {
		"Content-Type" : "application/json; charset=utf-8",
		"Authorization" : "Basic OTQ4ZGUwYTktYjFmNS00MjUwLWJjNDgtMGRmMDE0NWVkMDRi" //rest api key
	}

  	var options = {
  		host : "onesignal.com",
  		port : 443,
  		path : "/api/v1/app",
  		// method: "GET",
  		headers : headers
  	}
	var req = https.request(options, function(res){
		res.on('data', function(data){
			console.log('response:')
			console.log(JSON.parse(data))
		})
	})
	req.on('err', function(e){
		console.log('ERROR:')
		console.log(e)
	})
}
ViewApp()