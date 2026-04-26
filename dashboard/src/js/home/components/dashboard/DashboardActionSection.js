import React from "react";
import ReporsActions from "./actionSection/reports/ReporsActions";
import shallowCompare from "react-addons-shallow-compare";
import ActionSection from "../../../components/ActionSection";
import DevxTable from "../../../components/DevxTable";
import {
odataSources,    
devxTeamSignatures,
devxMySignatures, 
devxMyItemPastDue,
devxTeamItemPastDue,
devxCompanyItemPastDue,
devxMyNewComments,
devxMyNewActivity,
devxMyNewAssignments,
devxMyTrainingCommingDue,
devxTeamTrainingCommingDue,
devxCompanyTrainingCommingDue,
devxMyTrainingComplete,
devxTeamTrainingComplete,
devxCompanyTrainingComplete,
devxMyTrainingPastDueRow,
devxTeamTrainingPastDueRow,
devxCompanyTrainingPastDueRow
} from "../index"
import strings from "../../../localization";

export default class DashboardActionSection extends React.Component {
	
	constructor() {
	    super();
	    this.state = {
	    	current: 0,
            title: "",
            currentCount: 0,
            dataSource: ""
	    };
	    this.getTableStructure = this.getTableStructure.bind(this); 
	    this.changeDataSource = this.changeDataSource.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentView !== this.props.currentView || nextProps.userLevel !== this.props.userLevel){
            this.changeDataSource(nextProps.currentView, nextProps.userLevel, nextProps.currentCount)
        }
    }

    changeDataSource(currentView, userLevel, currentCount){
  		var count = 0; 
        switch(currentView){
			
			case strings.signaturesNeeded:
                count = currentCount.SignaturesNeeded; 
				if(userLevel === 1) return this.setState({dataSource: odataSources.signatures[1], currentCount: count }) 
                return this.setState({dataSource: odataSources.signatures[0],  currentCount: count }) ;

			case strings.newComments:
                count = currentCount.NewComments; 
				return this.setState({dataSource: odataSources.newComments[0] ,  currentCount: count }) ;

			case strings.itemsPastDue: 
                count = currentCount.ItemsPastDue; 
				if(userLevel === 1) return this.setState({dataSource: odataSources.itemsPastDue[1] ,  currentCount: count }); 
				if(userLevel === 2) return this.setState({dataSource: odataSources.itemsPastDue[2] ,  currentCount: count }) 
				return  this.setState({dataSource: odataSources.itemsPastDue[0],  currentCount: count  }); 

			case strings.newAssignments: 
                count = currentCount.NewAssignments; 
				return  this.setState({dataSource: odataSources.newAssignments[0],  currentCount: count  }) ;

			case strings.newActivities: 
                count = currentCount.NewActivities; 
				return  this.setState({dataSource: odataSources.newActivities[0],  currentCount: count  }) ;

			case strings.trainingPastDue: 
                count = currentCount.TrainingRecordsPastDue; 
				if(userLevel === 1) this.setState({dataSource: odataSources.trainingPastDue[1],  currentCount: count  }) ;
				if(userLevel === 2) this.setState({dataSource: odataSources.trainingPastDue[2],  currentCount: count  }) ;
				return  this.setState({dataSource: odataSources.trainingPastDue[0],  currentCount: count  }) ;

			case strings.trainingCommingDue: 
                count = currentCount.TrainingRecordsAtRisk; 
				if(userLevel === 1) this.setState({dataSource: odataSources.trainingCommingDue[1],  currentCount: count  }) ;
				if(userLevel === 2) this.setState({dataSource: odataSources.trainingCommingDue[2],  currentCount: count  }) ;
				return this.setState({dataSource: odataSources.trainingCommingDue[0],  currentCount: count  }) ;

			case strings.trainingComplete: 
                count = currentCount.TrainingRecordsCompliant; 
				if(userLevel === 1) return this.setState({dataSource: odataSources.trainingComplete[1],  currentCount: count  }) ;
				if(userLevel === 2) return this.setState({dataSource: odataSources.trainingComplete[2],  currentCount: count  }) ;
				return this.setState({dataSource: odataSources.trainingComplete[0],  currentCount: count  }) ;
		}
      
    }

	getTableStructure(){
		const {currentView, userLevel} = this.props;
		switch(currentView){
			
			case strings.signaturesNeeded:
				if(userLevel === 1){ 
                    return devxTeamSignatures
				}
                return devxMySignatures;

			case strings.newComments:
				return devxMyNewComments;

			case strings.itemsPastDue: 
				if(userLevel === 1) return devxTeamItemPastDue
				if(userLevel === 2) return devxCompanyItemPastDue
				return devxMyItemPastDue;

			case strings.newAssignments: 
				return devxMyNewAssignments;

			case strings.newActivities: 
				return devxMyNewActivity	

			case strings.trainingPastDue: 
				if(userLevel === 1) devxTeamTrainingPastDueRow
				if(userLevel === 2) devxCompanyTrainingPastDueRow
				return devxMyTrainingPastDueRow

			case strings.trainingCommingDue: 
				if(userLevel === 1) devxTeamTrainingCommingDue
				if(userLevel === 2) devxCompanyTrainingCommingDue
				return devxMyTrainingCommingDue

			case strings.trainingComplete: 
				if(userLevel === 1) return devxTeamTrainingComplete
				if(userLevel === 2) return devxCompanyTrainingComplete
				return devxMyTrainingComplete
		}
	}


	render(){
		const {props, state} = this,
			  {current, dataSource} = this.state,
			  tableStructure = this.getTableStructure();
		
        if(props.currentView === "Saved reports" && [0, 1].indexOf( props.userLevel) > -1 ){
			return (
				<ActionSection {...props}>
					<ReporsActions />
				</ActionSection>
			);
		}
		console.log(state.currentCount)
		return(
			<ActionSection receiving={ false}>
					{(props.currentView && tableStructure && state.currentCount > -1) ? 
						<div>
							<h4>{props.currentView} ({state.currentCount})</h4>
							<DevxTable dataSource={dataSource} columns={tableStructure} />
						</div>
						: 
						<div className="placeholder-action-items">
							Click on dashboard items above to see more detail.
						</div>
					}
			</ActionSection>
		);
	}
}
