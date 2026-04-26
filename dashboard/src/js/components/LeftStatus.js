import React from "react";
import shallowCompare from "react-addons-shallow-compare";
var d3 = require("d3");

export default class LeftStatus extends React.Component {

	constructor(){
		super();
		this.state = {
			currentBar: 0,
			activeBars: 0,
		};
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount(){
		const {data, labels} = this.props;

		var width = 300,
		 	height = 280,
		    barHeight = height/data.length;
		var y = d3.scaleOrdinal()
		    .range([0, barHeight ], .1);

		var x = d3.scaleLinear()
		    .domain([0, d3.max(data)])
		    .range([0, width]);

		var chart = d3.select(".leftChart")
		    .attr("width", width)
		    .attr("height", barHeight * data.length + 50);

		var yAxis = d3.axisLeft()
		    .scale(y)

		yAxis.tickSize(0);

		var bar = chart.selectAll("g")
		    .data(data)
		  	.enter().append("g")
		    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })

		bar.append("rect")
		    .attr("width", x)
		    .attr("height", barHeight - 1)
		    .on("click", this.onClick.bind(this));

		 bar.append("g")
				.attr("class", "y axis")
				.call(yAxis)

		bar.append("text")
		    .attr("x", function(d) { return x(d) + 35; })
		    .attr("y", barHeight / 2)
		    .attr("dy", ".35em")
		    .attr("class", "bar-text")
		    .text(function(d) { return d; });

		bar.append("text")
		    .attr("x", -30 )
		    .attr("y", barHeight / 2)
		    .attr("dy", ".2em")
		    .text(function(d, i) { return labels[i]; })
		    .call(this.wrap, 120);
	}

	componentWillReceiveProps(nextProps) {
	 	if(nextProps.currentView !== nextProps.action){
	 		 d3.select(".leftChart")
	 		 	.selectAll("rect")
	 		 	.style("fill", "transparent");
	 		 d3.selectAll(".bar-text")
				.style('fill', "#fff");

			this.setState({activeBars: 0});
	 	}     
	}

	onClick(e, pos, rect){
		var {currentBar, activeBars} = this.state;
		//you can check to see if its equal to #fff because it renders differently on different browsers
		// if(rect[currentBar].style.fill != "transparent" && rect[currentBar].style.fill != ""){
		// 	rect[currentBar].style.fill = "transparent";
		// 	d3.selectAll(".bar-text")._groups[0][currentBar]
		// 		.style.fill = "#fff";
		// 	if(currentBar === pos){
		// 		this.props.onClick(this.props.action, false);
		// 		return false;
		// 	}
		// } 
		if(rect[pos].style.fill != "transparent" && rect[pos].style.fill != ""){
			rect[pos].style.fill = "transparent";
			d3.selectAll(".bar-text")._groups[0][pos]
				.style.fill = "#fff";
			
			activeBars--;
			this.setState({currentBar: pos, activeBars});

			var mantain = activeBars <= 0 ? false : true;
			this.props.onClick(this.props.action, mantain);
			return false;
		} 

		rect[pos].style.fill = "#fff";
		d3.selectAll(".bar-text")._groups[0][pos]
			.style.fill = "#4CBBF9";

		activeBars++
		this.setState({currentBar: pos, activeBars});
		this.props.onClick(this.props.action, true)
	}

	wrap(text, width){
	  text.each(function() {
	    var text = d3.select(this),
	        words = text.text().split(/\s+/).reverse(),
	        word,
	        line = [],
	        lineNumber = 0,
	        lineHeight = 1.1, // ems
	        y = text.attr("y"),
	        dy = parseFloat(text.attr("dy")),
	        tspan = text.text(null).append("tspan").attr("x", -10).attr("y", y).attr("dy", dy + "em"),
	        tspanTop = tspan;
	    while (word = words.pop()) {
	      line.push(word);
	      tspan.text(line.join(" "));
	      if (tspan.node().getComputedTextLength() > width) {
	        line.pop();
	        tspan.text(line.join(" "));
	        line = [word];
	        tspanTop.attr("y", y - 5)
	        tspan = text.append("tspan").attr("x", -10).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
	      }
	    }
	  });
	}


	render(){
		const {action, onClick, title, subTitle} = this.props;
		return(
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 status">
				<div className="left-chart ">
					<svg class="chart leftChart"></svg>
				</div>
				<div className="margin-top-27">
					<div className="align-center pt16 italic">{title}</div>
					<div className="status-message align-center">{subTitle ? subTitle : ""}</div> 
				</div>
			</div>
		);
	}
}
