const express = require("express");
const database = require("./database");


const router = express.Router();

router.post('/login', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		database.connection.query('SELECT * FROM customer WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				response.status(200).send("success");
			} else {
				response.status(401).send('Incorrect Username and/or Password!');
			}			
		});
	} else {
		response.status(400).send('Please enter Username and Password!');
	}
});

router.get("/esg", (request, response) => {
	if (request.query.tickerId == null || request.query.tickerId.length == 0) {
	  	response.status(400).send("Invalid ticker Id passed in the parameters");
	} else {
		database.connection.query('SELECT * FROM ESG_rating WHERE ticket_id = ?', [request.query.tickerId], function(error, results, fields) {
			if (results.length > 0) {
				response.status(200).send(results);
			} else {
				response.status(404).send('No record found');
			}			
		});
	}
});

router.post('/esg', function(request, response) {
	var data = request.body;
	if (JSON.stringify(data) === "{}") {
		response.status(400).send("Request's body content is invalid!");
	}

	database.connection.query('INSERT INTO ESG_rating (ticket_id, ESG_rating) VALUES (?, ?)', [request.body.tickerId, request.body.esgRating], function(error, results, fields) {
		if (error) {
			console.log(error);
			response.status(500).send("Some internal error occured");
		} else {
			response.status(200).send("success");
		}
	});
});


module.exports = router;