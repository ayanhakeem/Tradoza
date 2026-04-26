import React from "react";
import IconItem from "./iconMenu/IconItem"; 
import shallowCompare from "react-addons-shallow-compare";

export default class IconMenu extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
	  	return shallowCompare(this, nextProps, nextState);
	}

	render(){
		const {currentCount, tabs} = this.props;
		const items = tabs.map((index, i) => 
			<IconItem 
				key={i} 
				onClick={this.props.onClick} 
				amount={currentCount[index.countField]}
				hiden={(index.hide.indexOf(this.props.userLevel) < 0) ? false : true  }
				currentView={this.props.currentView} 
				{...index} />
		);

		return(
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<ul className="icon-menu">
					{items}
				</ul>
			</div>
		);
	}
}
