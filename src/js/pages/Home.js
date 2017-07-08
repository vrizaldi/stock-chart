import React from "react";

import ChartWrapper from "../components/ChartWrapper";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default class Home extends React.Component {
	
	add() {
		var code = document.getElementById("adder").value;
		console.log(`Adding ${code}...`);
		this.props.addCompany(code);
	}

	remove(code) {
		console.log(`Removing ${code}...`);
		this.props.removeCompany(code);
	}

	render() {
		return(
			<div>
				<p>A chart of stock market, synchronous with every client.</p>
				<ChartWrapper charts={this.props.charts} />
				{
					// list the remove buttons
					Object.keys(this.props.charts[0]).map((d) => {
						if(d != "date") {
							return(
								<Button className="btn btn-outline-danger"
									label={d}
									value={d}
									action={this.remove.bind(this)}
								/>
							);
						}
					})
				}

				<InputField id="adder" label="Add company:">
					<Button className="btn btn-success"
						label="+"
						action={this.add.bind(this)} />
				</InputField>
			</div>
		);
	}
}