import React from "react";
import Select from "./Select";

export default class TabHeader extends React.Component {

	togglePrint(){
		window.print();
	}

	shouldComponentUpdate(nextProps, nextState) {
	  	return false;
	}

	render(){
		const {options, title, onChange} = this.props;
		return(
			<div className="col-lg-12 col-md-12 header-dashboard">
				<h2 className="float-left">{title}</h2>
				<Select className="float-left select" onChange={onChange} options={options} />
				<span className="click" onClick={this.togglePrint.bind(this)}><i class="fa fa-print"></i></span>
			</div>	
		);
	}
}
