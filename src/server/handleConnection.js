import chartManager from "./ChartManager";

export default function handleConnection(client) {
	console.log("Client connected...");

	// give the charts to the client
	client.emit("connected", chartManager.getCharts());

	// add client listeners here
	client.on("message", (data) => {
		console.log(data);
	});
}