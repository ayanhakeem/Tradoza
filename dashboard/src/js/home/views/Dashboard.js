import React from "react";
import TabHeader from "../../components/TabHeader";
import Loader from "../../components/Loader";
import TrainingStatus from "../components/dashboard/TrainingStatus";
import DashboardActionSection from "../components/dashboard/DashboardActionSection";
import IconMenu from "../components/dashboard/IconMenu";
import {scrollToActionSection} from "../../utils";
import {userLevel, tabs} from "../components";
import strings from "../../localization";
/**

KEEP IN MIND THAT THIS TAB IS DIFFERENT THAN ALL THE OTHERS AND IS NOT STRUCTURE THE SAME
ALL THE COMPONENTS FROM THIS TAB ARE INDIVIDUAL TO HOME COMPONENTS

**/

export default class Dashboard extends React.Component {

	constructor(){
		super();
		this.state = {
			currentView: "",
			userLevel: 0
		};
		this.changeView = this.changeView.bind(this);
		this.changeUserLevel = this.changeUserLevel.bind(this);
	}

	changeView(field, mantain=false){
		mantain = typeof mantain === 'boolean' ? mantain : false;
		if(!mantain && field === this.state.currentView) field = "";
		this.setState({currentView: field});
		if(field !== "") scrollToActionSection();
	}

	changeUserLevel(event){
		var userLevelInt = userLevel.indexOf(event.target.value);
		this.setState({userLevel: userLevelInt});
	}

	render(){
		const {documents, counts, signatures} = this.props,
		 	  {state} = this;
		var currentCount = [];
		
		switch(state.userLevel){
			case 0: 
				currentCount = counts.myCounts; 
				break;
			case 1:
				currentCount = counts.myTeamCounts; 
				break;
			case 2:
				currentCount = counts.myCompanyCounts; 
				break;
		}
		
		return(
			<div className="dashboard-div" id="printarea"> 
				<TabHeader title={strings.dashboard} options={userLevel} userLevel={userLevel[state.userLevel]} onChange={this.changeUserLevel} />
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<TrainingStatus 
						onClick={this.changeView}
                        currentCount={currentCount} 
						action={[strings.trainingPastDue, strings.trainingCommingDue, strings.trainingComplete]}
						currentView={state.currentView} />
					<IconMenu 
						userLevel={state.userLevel} 
						currentView={this.state.currentView} 
						onClick={this.changeView} 
						currentCount={currentCount}
						documentsCount={documents.count} 
						tabs={tabs} />
					<DashboardActionSection 
						actions={this.props.actions} 
						currentCount={currentCount}
                        userLevel={state.userLevel}  
						currentView={this.state.currentView} 
						signatures={signatures}
						documents={documents} />
				</div>
			</div>
		);
	}
}
