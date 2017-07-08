"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connectToServer = connectToServer;
exports.addCompany = addCompany;
exports.removeCompany = removeCompany;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectToServer() {
	// a thunk
	return function (dispatch) {
		dispatch({
			type: "SERVER_CONNECTING"
		});
		var socket = io.connect("/");
		socket.on("connected", function (data) {
			console.log("Connected with server");
			dispatch({
				type: "SERVER_CONNECTED",
				payload: data
			});
		});
		socket.on("update", function (data) {
			console.log("Received an update");
			dispatch({
				type: "UPDATE",
				payload: data
			});
		});
	};
}

function addCompany(code) {
	(0, _axios2.default)({
		method: "post",
		url: "/add",
		data: {
			code: code
		}
	});

	return {
		type: "ADD_COMPANY"
	};
}

function removeCompany(code) {
	(0, _axios2.default)({
		method: "post",
		url: "/remove",
		data: {
			code: code
		}
	});

	return {
		type: "REMOVE_COMPANY"
	};
}