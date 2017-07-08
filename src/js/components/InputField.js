import React from "react";

export default class InputField extends React.Component {
	render() {
		return(
			<div>
				<label for={this.props.id}>{this.props.label}</label>
				<input id={this.props.id}/>
				{this.props.children}
			</div>
		);
	}
}