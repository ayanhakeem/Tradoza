import React from "react";
import Select from "./Select";
import {Link} from "react-router";

export default class TabDualActionHeader extends React.Component {

	togglePrint(){
		window.print();
	}

	shouldComponentUpdate(nextProps, nextState) {
	  	return false;
	}

	render(){
		const {options, title, onChange, secondTitle, to} = this.props;
		return(
			<div className="col-lg-12 col-md-12 header-dashboard">
				<h2 className="float-left">{title} / </h2><Link to={to}><span className="malibu-text">{secondTitle}</span></Link>
				<Select className="float-left select" onChange={onChange} options={options} />
				<span className="click" onClick={this.togglePrint.bind(this)}><i class="fa fa-print"></i></span>
			</div>	
		);
	}
}
