import axios from "axios";

export function connectToServer() {
	// a thunk
	return (dispatch) => {
		dispatch({
			type: "SERVER_CONNECTING"
		});
		var socket = io.connect("/");
		socket.on("connected", function(data) {
			console.log("Connected with server");
			dispatch({
				type: "SERVER_CONNECTED",
				payload: data
			});
		});
		socket.on("update", function(data) {
			console.log("Received an update");
			dispatch({
				type: "UPDATE",
				payload: data
			});
		});
	};
}

export function addCompany(code) {
	axios({
		method: "post",
		url: "/add",
		data: {
			code
		}
	});

	return {
		type: "ADD_COMPANY"
	};
}

export function removeCompany(code) {
	axios({
		method: "post",
		url: "/remove",
		data: {
			code
		}
	});

	return {
		type: "REMOVE_COMPANY"
	};
}