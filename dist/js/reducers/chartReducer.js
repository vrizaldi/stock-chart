"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reduce;
var initialStates = {
	status: "idle",
	charts: []
};

function reduce() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { initialStates: initialStates };
	var action = arguments[1];

	switch (action.type) {
		case "SERVER_CONNECTING":
			return _extends({}, state, {
				status: "connecting"
			});

		case "SERVER_CONNECTED":
			return _extends({}, state, {
				status: "connected",
				charts: action.payload
			});

		case "UPDATE":
			console.log("charts data:", action.payload);
			return _extends({}, state, {
				charts: action.payload
			});

		default:
			return state;
	}
}