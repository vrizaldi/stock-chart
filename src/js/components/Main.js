import React from "react";
import { connect } from "react-redux";

import { connectToServer, addCompany, removeCompany } from "../actions/ChartActions";
import Home from "../pages/Home";
import Login from "../pages/Login";

@connect((store) => {
	return {
		status: store.chart.status,
		charts: store.chart.charts
	};
}) export default class Main extends React.Component {

	componentDidMount() {
		this.props.dispatch(connectToServer());	
	}

	addCompany(code) {
		this.props.dispatch(addCompany(code));
	}

	removeCompany(code) {
		this.props.dispatch(removeCompany(code));
	}
 
	render() {
		console.log("charts:", this.props.charts);
		var page = "";
		switch(this.props.status) {
		case "connecting":
			page = (<Login />);
			break;
		case "connected":
			page = (
				<Home addCompany={this.addCompany.bind(this)} 
					removeCompany={this.removeCompany.bind(this)}
					charts={this.props.charts} />
			);
			break;
		}
		return(
			<div>
				<h1>Stock Market Chart</h1>
				{page}
			</div>
		);
	}

	changeText() {
		this.props.dispatch(Actions.changeText("It works"));
	}
}