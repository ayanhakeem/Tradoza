import React from "react";
import shallowCompare from "react-addons-shallow-compare";
// import Bar from "react-chartjs/lib/bar";
const borderColors = [
	"#C95766",
	"#ffeb3b",
	"#ffeb3b",
	"#8bc34a",
	"#8bc34a"
];
var d3 = require("d3");

export default class LeftStatus extends React.Component {

	constructor(){
		super();
		this.state = {
			currentBar: 0,
			activeBars: 0
		};
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {

		var labels = ["Jan", "Feb", "Mar", "Apr", "May"],
			data = [2003, 1003, 900, 500, 3000];

		var width = 300,
		 	height = 280,
		    barWidth = width/data.length;

		var x = d3.scaleOrdinal()
			.domain(labels.map(function(d) { return d; }))
		    .range([0, width], .1);

		var y = d3.scaleLinear()
		    .domain([0, d3.max(data)])
		    .range([0, height]);

		var chart = d3.select(".rightChart")
		    .attr("width", width)
		    .attr("height", height);

		var bar = chart.selectAll("g")
		    .data(data)
		  	.enter().append("g")
		    .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; })

		bar.append("rect")
			.attr("y", function(d) { return height - y(d); })
			.attr("height", function(d) {return y(d); })
			.attr("width", barWidth - 1)
			.style("stroke", function(d, i) {return borderColors[i]; })
			.on("click", this.onClick.bind(this));

		bar.append("text")
			.attr("x", barWidth / 2)
			.attr("y", function(d) { return height - y(d) - 10; })
			.style("text-anchor", "middle")
			.attr("class", "bar-text-right")
			.text(function(d) { return d; });

		bar.append("text")
		    .attr("y", height + 30)
		    .attr("x", barWidth / 2)
		    .attr("dx", ".75em")
		    .text(function(d, i) { return labels[i]; });
		    
	}

	componentWillReceiveProps(nextProps) {
	 	if(nextProps.currentView !== nextProps.action){
	 		 d3.select(".rightChart")
	 		 	.selectAll('rect')
	 		 	.style("fill", "transparent");
	 		 d3.selectAll(".bar-text-right")
				.style('fill', "#fff");

			this.setState({activeBars: 0});
	 	}     
	}

	onClick(e, pos, rect){
		var {currentBar, activeBars} = this.state;
		//you can check to see if its equal to #fff because it renders differently on different browsers
		// if(rect[currentBar].style.fill != "transparent" && rect[currentBar].style.fill != ""){
		// 	rect[currentBar].style.fill = "transparent";
		// 	d3.selectAll(".bar-text-right")._groups[0][currentBar]
		// 		.style.fill = "#fff";
		// 	if(currentBar === pos){
		// 		this.props.onClick(this.props.action, false);
		// 		return false;
		// 	}
		// }

		if(rect[pos].style.fill != "transparent" && rect[pos].style.fill != ""){
			rect[pos].style.fill = "transparent";
			d3.selectAll(".bar-text-right")._groups[0][pos]
				.style.fill = "#fff";
			
			activeBars--;
			this.setState({currentBar: pos, activeBars});

			var mantain = activeBars === 0 ? false : true;
			this.props.onClick(this.props.action, mantain);
			return false;
		} 

		rect[pos].style.fill = borderColors[pos]
		d3.selectAll(".bar-text-right")._groups[0][pos]
			.style.fill = borderColors[pos];
		activeBars++;
		this.setState({currentBar: pos, activeBars});
		this.props.onClick(this.props.action, true)
	}

	render(){
		const {action, onClick, title, subTitle} = this.props;
		return(
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 status">
				<div className="left-chart">
					<svg class="chart rightChart"></svg>
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