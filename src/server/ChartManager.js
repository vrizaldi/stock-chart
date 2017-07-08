import googleFinance from "google-finance";

class ChartManager {
	
	constructor() {
		this.charts = [];
		this.symbols = [];
		this.io = null;
	}

	init(io) {
		this.io = io;
		this.charts = [];
		this.symbols = [];

		// default
		this.addChart("GOOGL");
//		this.addChart("YHOO");
	}

	getCharts() {
		return this.charts;
	}

	addChart(symbol) {
		symbol = symbol.toUpperCase();

		var now = new Date();
		googleFinance.historical({
			symbol: symbol,
			from: new Date(now - 31536000000)		// a year earlier
		
		}, (err, res) => {
			if(err) return console.log("err", err);
			
			// if everything went perfectly,
			// update data and symbols
			console.log("Successfully updated the charts data for", symbol);

			// parse the data
			if(this.charts.length == 0) {
				// map res into charts 
				this.charts = res.map((d) => {
					var pData = {
						date: d.date
					};
					pData[d.symbol] = d.close;
					return pData;
				});
			} else {
				res.map((d, i) => {
					this.charts[i][d.symbol] = d.close;
				});
			}	
			this.symbols.push(symbol);

			// broadcast update
			this.io.sockets.emit("update", this.charts);
		});
	}

	removeChart(symbol) {
		if(symbol == "date") return;

		// remove the series off the chart collection
		this.charts.map((d) => {
			if(d.hasOwnProperty(symbol)) {
				delete d[symbol];
			}
		});

		console.log(`Successfully removed ${symbol}`);
		this.io.sockets.emit("update", this.charts);
	}
}

export default new ChartManager;