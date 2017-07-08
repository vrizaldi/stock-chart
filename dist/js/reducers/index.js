"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _chartReducer = require("./chartReducer");

var _chartReducer2 = _interopRequireDefault(_chartReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	chart: _chartReducer2.default
});