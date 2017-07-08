import chartManager from "./ChartManager";

export function addCompany(req, res) {
	console.log(`Adding ${req.body.code}...`);
	chartManager.addChart(req.body.code);
}

export function removeCompany(req, res) {
	console.log(`Removing ${req.body.code}`);
	chartManager.removeChart(req.body.code);
}