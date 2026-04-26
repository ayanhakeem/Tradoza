import React from "react";
import shallowCompare from "react-addons-shallow-compare";
// import Bar from "react-chartjs/lib/bar";
var d3 = require("d3");

export default class LeftStatus extends React.Component {

	constructor(){
		super();
		this.state = {
			backgrounds: [],
			currentBar: 0
		};
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {

		var labels = ["Jan", "Feb", "Mar"],
			data = [65, 59, 80],
			labelsColor = ["#fff", "rgb(74, 74, 74)", "rgb(74, 74, 74)"];

		
		var width = 360,
		    height = 360,
		    radius = Math.min(width, height) / 2;

		var color = d3.scaleOrdinal()
		    .range(["#C95766", "#B0E37C", "#DCD146"]);

		var arc = d3.arc()
		    .outerRadius(radius - 10)
		    .innerRadius(0);

		var labelArc = d3.arc()
		    .outerRadius(radius - 70)
		    .innerRadius(radius - 70);

		var pie = d3.pie()
		    .sort(null)
		    .value(function(d) { return d; });

		var svg = d3.select(".pie-chart").append("svg")
		    .attr("width", width)
		    .attr("height", height)
		  	.append("g")
		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var g = svg.selectAll(".arc")
			.data(pie(data))
			.enter().append("g")
			.attr("class", "arc")
			.on("click", this.onClick.bind(this));

		g.append("path")
		  .attr("d", arc)
		  .style("fill", function(d, i) { return color(i); });

		g.append("text")
		  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
		  .attr("dy", ".55em")
		  .attr("dx", ".55em")
		  .text(function(d, i) { return data[i]; })
		  .style("fill", function(d, i) { return labelsColor[i]; })
		    
	}

	componentWillReceiveProps(nextProps) {
	 	if(nextProps.currentView !== nextProps.action){
	 		 d3.select(".pie-chart")
	 		 	.selectAll("text")
	 		 	.style("text-decoration", "");
	 	}     
	}

	onClick(e, pos, rect){
		const {currentBar} = this.state;
		const {action} = this.props;

		if(rect[currentBar].childNodes[1].style["text-decoration"] != ""){
			rect[currentBar].childNodes[1].style["text-decoration"] = "";
			if(currentBar === pos){
				this.props.onClick(action, false);
				return false;
			}
		} 

		rect[pos].childNodes[1].style["text-decoration"] = "underline";
		this.setState({currentBar: pos});
		this.props.onClick(action, true)
	}

	render(){
		const {action, onClick, title, subTitle} = this.props;
		return(
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 status">
				<div className="left-chart">
					<div class="chart rightChart pie-chart"></div>
				</div>
				<div className="margin-top-27">
					<div className="align-center pt16 italic">{title}</div>
					<div className="status-message align-center">{subTitle ? subTitle : ""}</div>
				</div>
			</div>
		);
	}
}
// <div className="pie">
				// 	// <div onClick={onClick.bind(this, action)}>Click here to see action</div>
				// </div>