import express from "express";
import { createServer } from "http";
import socket from "socket.io";
import bodyParser from "body-parser";

import servePage from "./server/servePage.js";
import handleConnection from "./server/handleConnection";
import chartManager from "./server/ChartManager";
import { addCompany, removeCompany } from "./server/ManageCharts";

var app = express();
var server = createServer(app);
var io = socket(server);

chartManager.init(io);

var jsonencoded = bodyParser.json();
app.use(express.static(__dirname + "/public"));

app.get("*", servePage);

app.post("/add", jsonencoded, addCompany);
app.post("/remove", jsonencoded, removeCompany);

io.on("connection", handleConnection);

var port = process.env.PORT ? process.env.PORT : 21701;
server.listen(port, 
	function(err) {
		if(err) throw err;

		console.log("Server is listening on port " + port);
	});
