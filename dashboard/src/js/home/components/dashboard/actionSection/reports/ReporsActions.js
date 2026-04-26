import React from "react";
import axios from 'axios';
// import Loader from "../../../../components/Loader"

export default class ReporsActions extends React.Component {
	constructor() {
	    super();
	}
	
	componentDidMount() {
	 // 	axios.get("https://test.zenqms.com:8444/rs.aspx?wscmd=renderedreportpart&wsarg0=Basic\\PB+Audits+by+Year&wsarg1=Chart&wsarg2=&wsarg3=&wsarg4=aHR0cHM6Ly90ZXN0LnplbnFtcy5jb206ODQ0NC9ycy5hc3B4")
		// .then(function (response) {
		// 	var report = document.getElementById('report');
		// 	report.innerHTML = response.data;
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });    
	}

	render(){
		const style = {
			height: "500px",
   			width: "100%",
   			frameBorder: "0"
		};
		const {userLevel} = this.props;
		return(
			<div id="report">
				<iframe style={style} frameBorder="0" src="https://test.zenqms.com:8444/rs.aspx?wscmd=renderedreportpart&wsarg0=Basic\PB+Audits+by+Year&wsarg1=Chart&wsarg2=&wsarg3=&wsarg4=aHR0cHM6Ly90ZXN0LnplbnFtcy5jb206ODQ0NC9ycy5hc3B4" />
			</div>
		);
	}
}
