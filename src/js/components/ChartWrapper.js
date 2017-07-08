import React from "react";
import { LineTooltip, SimpleTooltip } from "react-d3-tooltip";
import { Chart } from "react-d3-core";

export default class ChartWrapper extends React.Component {
	constructor() {
		super();

	}

	render() {
		console.log("chart data:", this.props.charts);

		// settings
		const title = "Stock Chart";
		const padding = 100;
		const width = 900;
		const height = 500;
		const chartSeries = [
			{
				field: "close",
				name: "Close",
				color: "red"
			}
		];
		// accessor
		const x = function(d) {
			return new Date(d.date);
		};
		const y = function(d) {
			return d;
		};

		const yScale = "linear";
		const xScale = "time";

		const yDomain = [1000, 0];
		const xDomain = [new Date(this.props.charts[0].date), new Date()];
		const xRange = [0, width - 2 * padding];
		const yRange = [0, height - 1.75 * padding];

		return(
			
			<LineTooltip
				width={width}
				height={height}
				data={this.props.charts}
				chartSeries={this.getChartSeries()}
				x={x}
				y={y}
				xScale={xScale}
				yScale={yScale}
				xDomain={xDomain}
				xRange={xRange}
				yDomain={yDomain}
				yRange={yRange}
			>
				<SimpleTooltip />
			</LineTooltip>
		);
		
	}

	getChartSeries() {
		var sample = this.props.charts[0];
		// map the keys (company codes) into the chartSeries
		var chartSeries = [];
		Object.keys(sample).map((d) => {
			if(d == "date") return;
			chartSeries.push({
				field: d,
				name: d,
				color: this.getRandColor(2)
			});
		});
		return chartSeries;
	} 

	getRandColor(brightness){

		// Six levels of brightness from 0 to 5, 0 being the darkest
		var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
		var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
		var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0);});
		return "rgb(" + mixedrgb.join(",") + ")";
	}
}