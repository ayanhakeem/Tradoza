import React from "react";
import IconItem from "./iconMenu/IconItem"; 

class IconMenu extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.currentView !== nextProps.currentView || this.props.userLevel !== nextProps.userLevel;
	}

	render(){
		const {tabs, onClick, userLevel, currentView} = this.props;
		const items = tabs.map((index, i) => 
			<IconItem 
				key={i}
				className={"col-lg-6 col-md-6 col-sm-6 col-xs-6 icon-menu-tabs" + index.class} 
				onClick={onClick} 
				hiden={(index.hide.indexOf(userLevel) < 0) ? false : true  }
				currentView={currentView} 
				{...index} />
		);

		return(
			<div className="icon-menu inline">
				{items}
			</div>
		);

	}
}

IconMenu.propTypes = {
	tabs: React.PropTypes.arrayOf( 
		React.PropTypes.shape({
	      icon: React.PropTypes.string.isRequired,
	      title: React.PropTypes.string.isRequired,
	      class: React.PropTypes.string.isRequired,
	      hide: React.PropTypes.arrayOf(React.PropTypes.string),
	      amount: React.PropTypes.number.isRequired
    	})
    ),
    onClick: React.PropTypes.func.isRequired,
    userLevel: React.PropTypes.string.isRequired,
    currentView: React.PropTypes.string.isRequired
};

export default IconMenu;