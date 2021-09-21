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

module.exports = router;