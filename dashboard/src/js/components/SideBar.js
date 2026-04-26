import React from "react";
import ListItem from "./Sidebar/ListItem";

export default class SideBar extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
	   return this.props.location.pathname != nextProps.location.pathname; 
	}

	updateSrollbarDimensions(){
		var parent = document.getElementById('sideMenuContainer');
		var child = document.getElementById('sideMenu');
		var addWidth = child.offsetWidth - child.clientWidth + "px";
		child.style.width = 'calc(100% + ' + addWidth + ')';
	}

	scrollDown(){
		var child = document.getElementById('sideMenu');
		child.scrollTop += 100;
	}
    
    componentDidMount(){
    	this.updateSrollbarDimensions();
        window.addEventListener("resize", this.updateSrollbarDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateSrollbarDimensions);
    }
	
	render(){
		const pathname = this.props.location.pathname;
		const items = [
			{"icon": "fa fa-check", "title": "Training", "color": "sushi-text", "to": "/training"},
			{"icon": "fa fa-file", "title": "Documents", "color": "sushi-text", "to": "/documents"},
			{"icon": "clip-board", "title": "Audits", "color": "sushi-text", "to": "/audits"},
			{"icon": "fa  fa-exclamation-triangle", "title": "Issues", "color": "sushi-text", "to": "/issues"},
			{"icon": "fa fa-bar-chart", "title": "Reports", "color": "mine-shaft-text", "to": "/reports"},
		].map((index, i) => <ListItem pathname={pathname} key={i} {...index} />);	
		
		return(
			<div id="sideMenuContainer" className="side-menu-container">
				<ul id="sideMenu" className="side-menu">
					{items}
					<li className="add">
						
					</li>
					<li className="more" onClick={this.scrollDown.bind(this)}>
						<i className="fa fa-sort-down"></i>
					</li>
				</ul>
			</div>
		);
	}
}
