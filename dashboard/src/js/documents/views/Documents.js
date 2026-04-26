import React from "react";
import TabHeader from "../../components/TabHeader";
import Charts from "../../components/Charts";
import Table from "../../components/DynamicTable";
import ActionSection from "../../components/ActionSection";
import IconMenu from "../../components/IconMenu";
import shallowCompare from "react-addons-shallow-compare";
import {scrollToActionSection} from "../../utils";
import {newAssigmentsRow, newCommentsRow, generalRow, userLevel, chartLevel, tabs} from "../components";

export default class Documents extends React.Component {

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

			case "new documents assigments":
				return newAssigmentsRow;

			case "documents with new comments":
				return newCommentsRow;

			case "commingUpChart":
				return generalRow;

			case "stateOfDocumentsChart":
				return generalRow;

			case "":
				return [];
		}
	}

	// remove during production
	getData(){
		return [
			10,
			2,
			4,
			1,
			3

		];
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
			<div className="document-div general-area" id="printarea">
				<TabHeader title="Documents" options={userLevel} userLevel={userLevel[state.userLevel]} onChange={this.changeUserLevel} />
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0">
					<Charts 
						data={this.getData()} 
						labels={chartLevel} 
						onClick={this.changeView} 
						currentView={state.currentView}
						firstTitle="State of documents"
						firstChart="stateOfDocumentsChart"
						secondTitle="Documents coming up for review"
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
