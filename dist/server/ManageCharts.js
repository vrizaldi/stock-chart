"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addCompany = addCompany;
exports.removeCompany = removeCompany;

var _ChartManager = require("./ChartManager");

var _ChartManager2 = _interopRequireDefault(_ChartManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addCompany(req, res) {
	console.log("Adding " + req.body.code + "...");
	_ChartManager2.default.addChart(req.body.code);
}

function removeCompany(req, res) {
	console.log("Removing " + req.body.code);
	_ChartManager2.default.removeChart(req.body.code);
}