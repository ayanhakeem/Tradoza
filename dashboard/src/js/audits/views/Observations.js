import React from "react";
import TabDualActionHeader from "../../components/TabDualActionHeader";
import Charts from "../../components/Charts";
import ActionSection from "../../components/ActionSection";
import IconMenu from "../../components/IconMenu";
import {scrollToActionSection} from "../../utils";
import Table from "../../components/DynamicTable";
import {recentRow, newCommentsRow, generalRow, userLevel, chartLevel, tabs} from "../components/observations";

export default class Observations extends React.Component {

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

	handlePageChange(page){
		this.setState({currentPage: page.selected});
		this.getNewDocumentAssigments(page.selected);
	}

	getRowStructure(){
		const {props, state} = this;
		switch(state.currentView){

			case "observations with recent activity":
				return recentRow;

			case "observations with new comments":
				return newCommentsRow;

			case "commingUpChart":
				return generalRow;

			case "stateOfChart":
				return generalRow;

			case "":
				return [];
		}
	}

	// remove during production
	getData(){
		return [
			1000,
			2000,
			3444,
			1222
		];
	}

	componentWillMount(){
		if(this.props.documents.list.length <= 0 ) this.getNewDocumentAssigments(this.props.currentPage);     
	}

	getNewDocumentAssigments(page){
		const token = this.props.token;
		this.props.documentsActions.getDocuments(token, page)
	}

	render(){
		const {documents} = this.props;
		const {state} = this;
		return(
			<div className="document-div general-area" id="printarea">
				<TabDualActionHeader secondTitle="Audits" to="/audits" title="Observations" options={userLevel} userLevel={userLevel[state.userLevel]} onChange={this.changeUserLevel} />
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0">
					<Charts 
						data={this.getData()} 
						labels={chartLevel} 
						onClick={this.changeView} 
						currentView={state.currentView}
						firstTitle="State of observations"
						firstChart="stateOfChart"
						secondTitle="Unresolved observations"
						secondChart="commingUpChart"
					/>
					<IconMenu tabs={tabs} userLevel={userLevel[state.userLevel]} currentView={this.state.currentView} onClick={this.changeView} documentsCount={documents.count} />
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
