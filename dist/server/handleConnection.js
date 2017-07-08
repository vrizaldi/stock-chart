"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = handleConnection;

var _ChartManager = require("./ChartManager");

var _ChartManager2 = _interopRequireDefault(_ChartManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleConnection(client) {
	console.log("Client connected...");

	// give the charts to the client
	client.emit("connected", _ChartManager2.default.getCharts());

	// add client listeners here
	client.on("message", function (data) {
		console.log(data);
	});
}