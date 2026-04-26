import React from "react";
import LeftStatus from "./LeftStatus";
import RightStatus from "./RightStatus";

export default class Charts extends React.Component {

	render(){
		const {data, labels, firstTitle, firstSubTitle, firstChart, secondTitle, secondChart, onClick, currentView} = this.props;
		return(
			<div>
				<LeftStatus currentView={currentView} 
					data={data} 
					labels={labels} 
					onClick={onClick} 
					title={firstTitle} 
					subTitle={firstSubTitle} 
					action={firstChart} />
				<RightStatus 
					currentView={currentView} 
					onClick={onClick} 
					title={secondTitle} 
					action={secondChart} />
			</div>
		);
	}
}
