import React from "react";

export default class Select extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
	  	return false;
	}

	render(){
		const options = this.props.options.map((index, i) => <option key={i}>{index}</option>);

		return(
			<div className={this.props.className} onChange={this.props.onChange.bind(this)}>
				<select>
					{options}
				</select>
			</div>
		);
	}
}
