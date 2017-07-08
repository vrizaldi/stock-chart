"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _http = require("http");

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _servePage = require("./server/servePage.js");

var _servePage2 = _interopRequireDefault(_servePage);

var _handleConnection = require("./server/handleConnection");

var _handleConnection2 = _interopRequireDefault(_handleConnection);

var _ChartManager = require("./server/ChartManager");

var _ChartManager2 = _interopRequireDefault(_ChartManager);

var _ManageCharts = require("./server/ManageCharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = (0, _http.createServer)(app);
var io = (0, _socket2.default)(server);

_ChartManager2.default.init(io);

var jsonencoded = _bodyParser2.default.json();
app.use(_express2.default.static(__dirname + "/public"));

app.get("*", _servePage2.default);

app.post("/add", jsonencoded, _ManageCharts.addCompany);
app.post("/remove", jsonencoded, _ManageCharts.removeCompany);

io.on("connection", _handleConnection2.default);

var port = process.env.PORT ? process.env.PORT : 21701;
server.listen(port, function (err) {
	if (err) throw err;

	console.log("Server is listening on port " + port);
});