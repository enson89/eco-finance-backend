const express = require("express");
const database = require("./database");


const router = express.Router();

router.post('/login', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		database.connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				let data = {
					name: results[0].name
				};

				response.status(200).json(data);
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
	  	response.status(400).send("Invalid ticker id passed in the parameters");
	} else {
		database.connection.query('SELECT * FROM esg_rating WHERE ticker_id = ?', [request.query.tickerId], function(error, results, fields) {
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

	database.connection.query('INSERT INTO esg_rating (ticker_id, rating) VALUES (?, ?)', [request.body.tickerId, request.body.esgRating], function(error, results, fields) {
		if (error) {
			console.log(error);
			response.status(500).send("Some internal error occured");
		} else {
			response.status(200).send("success");
		}
	});
});

router.get("/txn", (request, response) => {
	if (request.query.userId == null || request.query.userId.length == 0) {
	  	response.status(400).send("Invalid user id passed in the parameters");
	} else {
		database.connection.query('SELECT * FROM txn t INNER JOIN users u ON u.id = t.user_id INNER JOIN esg_rating e ON e.ticker_id = t.ticker_id WHERE t.user_id = ?'
		, [request.query.userId], function(error, results, fields) {
			if (results.length > 0) {
				let data = {
					tickerId: results[0].ticker_id,
					esgRating: results[0].rating,
					amount: results[0].transaction_amount
				};
				response.status(200).json(data);
			} else {
				response.status(404).send('No record found');
			}			
		});
	}
});


module.exports = router;