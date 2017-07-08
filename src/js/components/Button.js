import React from "react";

export default class Button extends React.Component {
	click() {
		this.props.action(this.props.value);
	}

	render() {
		return(
			<button className={this.props.className}
				onClick={this.click.bind(this)}
				value={this.props.value}
			>
				{this.props.label}
			</button>
		);
	}
}