import React from "react";
import TabHeader from "../../components/TabHeader";
import RightStatus from "../../components/RightStatus";
import PieChartStatus from "../../components/PieChartStatus";
import Table from "../../components/DynamicTable";
import ActionSection from "../../components/ActionSection";
import shallowCompare from "react-addons-shallow-compare";
import {scrollToActionSection} from "../../utils";
import {generalRow, pipelineRow, statusRow, userLevel, chartLevel, tabs} from "../components";

export default class Training extends React.Component {

	constructor(){
		super();
		this.state = {
			currentView: "",
			userLevel: 0,
			currentPage: 1
		};
		this.changeView = this.changeView.bind(this);
		this.changeUserLevel = this.changeUserLevel.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
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

	handlePageChange(page){
		this.setState({currentPage: page.selected});
		this.getNewDocumentAssigments(page.selected);
	}

	getRowStructure(){
		const {props, state} = this;
		switch(state.currentView){

			case "pipeline":
				if(state.userLevel === 0) return pipelineRow
				return generalRow;

			case "status":
				if(state.userLevel === 0) return statusRow
				return generalRow;

			case "":
				return [];
		}
	}

	componentWillMount() {
		if(this.props.documents.list.length <= 0 ) this.getNewDocumentAssigments(this.props.currentPage);     
	}

	getNewDocumentAssigments(page){
		const token = this.props.token;
		this.props.documentsActions.getDocuments(token, page)
	}

	render(){
		const {documents, documentsActions} = this.props;
		const {state} = this;
		return(
			<div className="document-div general-area training-div" id="printarea">
				<TabHeader title="Training" options={userLevel} userLevel={userLevel[state.userLevel]} onChange={this.changeUserLevel} />
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0">
					<RightStatus 
						title="Training pipeline" 
						subTitle="* training items coming due" 
						currentView={state.currentView}
						action="pipeline"
						onClick={this.changeView} 
					/>
					<PieChartStatus 
						title="Training status" 
						subTitle= {state.userLevel === 0 ? "* training items" : "Team members status *people*"} 
						currentView={state.currentView}
						action="status"
						onClick={this.changeView} 
					/>
					<ActionSection receiving={documents.receiving}>
					{state.currentView ? 
						<Table current={state.currentPage} rowStructure={this.getRowStructure()} handlePageChange={this.handlePageChange} userLevel={state.userLevel} {...documents}/>
						: 
						<div className="placeholder-action-items">
							Click on dashboard items above to see more detail.
						</div>
					}
					</ActionSection> 
				</div>				
			</div>
		);
	}
}
