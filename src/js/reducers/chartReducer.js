const initialStates = {
	status: "idle",
	charts: []
};

export default function reduce(state={initialStates}, action) {
	switch(action.type) {
	case "SERVER_CONNECTING":
		return {
			...state,
			status: "connecting"
		};

	case "SERVER_CONNECTED":
		return {
			...state,
			status: "connected",
			charts: action.payload
		};

	case "UPDATE":
		console.log("charts data:", action.payload);
		return {
			...state,
			charts: action.payload
		};

	default:
		return state;
	}
}