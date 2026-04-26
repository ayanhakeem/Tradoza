import React from "react";

export var HigherView = ComposedComponent => class extends React.Component {
  
	constructor() {
		super();
		this.state = {
			currentView: "",
			userLevel: 0,
			currentPage: 1
		};
	}

	changeView(field, mantain=false){
		if(!mantain && field === this.state.currentView) field = "";
		this.setState({currentView: field});
		if(field !== "") scrollToActionSection();
	}

	changeUserLevel(event){
		var userLevelInt = userLevel.indexOf(event.target.value);
		this.setState({userLevel: userLevelInt});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	componentDidMount() {
		this.setState({ data: 'Hello' });
	}

	render() {
		return <ComposedComponent 
			{...this.props} 
			{...this.state} 
			changeView={this.changeView} 
			changeUserLevel={this.changeUserLevel }
			handlePageChange={this.handlePageChange} />;
	}
};