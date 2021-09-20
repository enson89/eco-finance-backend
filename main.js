const express = require("express");

server = express();
server.use(express.json());

server.use(user.router);
server.use(account.router);

server.listen(3000);