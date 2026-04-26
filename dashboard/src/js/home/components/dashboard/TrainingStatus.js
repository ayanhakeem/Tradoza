import React from "react";
import shallowCompare from "react-addons-shallow-compare";
var d3 = require("d3");
import strings from "../../../localization";

export default class TrainingStatus extends React.Component {

	constructor(){
		super();
		this.state = {
			currentBar: -1,
		};
        this.renderTable = this.renderTable.bind(this);
	}

    componentDidMount(){
        this.renderTable(this.props.currentCount);
    }
	
    renderTable(currentCount) {

		var labels = ["Jan", "Feb", "Mar"],
            // AT risk RED, compliant Green, past due Yellow
            data = [currentCount.TrainingRecordsPastDue, currentCount.TrainingRecordsCompliant , currentCount.TrainingRecordsAtRisk];
		
		var width = 360,
		    height = 360,
		    radius = Math.min(width, height) / 2;

		var color = d3.scaleOrdinal()
		    .range(["#C95766", "#B0E37C", "#DCD146"]);

		var arc = d3.arc()
		    .outerRadius(radius - 10)
		    .innerRadius(radius - 120);

		var labelArc = d3.arc()
		    .outerRadius(radius - 70)
		    .innerRadius(radius - 70);

		var pie = d3.pie()
		    .sort(null)
		    .value(function(d) { return d; });

		var svg = d3.select(".rightChart")
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
			.attr("transform", function(d) {
                if(d.data > 0){
                    return "translate(" + labelArc.centroid(d) + ")";
                }
                return "";
            })
			.attr("dy", ".45em")
			.attr("dx", ".55em")
			.text(function(d, i) { return data[i]; });
		
		svg.append("text")
			.attr("text-anchor", "middle")
			.text("75%")
			.on("click", this.onClickPercentage.bind(this))
			.attr("dy", "0.37em")
			.attr("dx", "1em")
			.style("fill", '#4A4A4A')
			.style("text-decoration", 'none');

	}

	componentWillReceiveProps(nextProps) {
	 	if(nextProps.currentView !== this.props.currentView){
	 		 d3.select(".pie-chart")
	 		 	.selectAll("text")
	 		 	.style("text-decoration", "");
	 	}
        if(nextProps.currentCount !== this.props.currentCount){
            // var pie = d3.pie()
		        // .sort(null)
		        // .value(function(d) { return d; });
            this.renderTable(nextProps.currentCount);
             // var {currentCount} = nextProps;
            // d3.select(".pie-chart")
                // .data(pie([currentCount.TrainingRecordsCompliant,currentCount.TrainingRecordsPastDue, currentCount.TrainingRecordsAtRisk]));
        }     
	}

	onClick(e, pos, rect){
		const {currentBar} = this.state;
		var {action} = this.props;
	    switch(pos){
            case 0:
                action = action[0]
                break;
            case 1:
                action = action[2]
                break;
            case 2:
                action = action[1];
                break;
        }	
		if(currentBar > -1 && rect[currentBar].childNodes[1].style.textDecoration  != "") {
            rect[currentBar].childNodes[1].style.textDecoration  = "";
			if(currentBar === pos){
				this.props.onClick(action, false);
				return false;
			}
		}
        rect[pos].childNodes[1].style.textDecoration = "underline";
        this.setState({currentBar: pos});
		this.props.onClick(action, true);
	} 

	onClickPercentage(e, pos, text){
		const {currentBar} = this.state;
		const {action} = this.props;
		this.props.onClick(action[2], false);
		this.setState({currentBar: 1});
	}

	render(){
        const {TrainingStatus} = this.props.currentCount;
        var trainingStatusColor = "flush-text";
        if(TrainingStatus === "AT RISK"){
            trainingStatusColor = "yellow-wattle-text";
        }else if(TrainingStatus === "COMPLIANT"){
            trainingStatusColor = "sushi-text";
        }
		return(
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 training-status">
				<svg class="chart rightChart pie-chart pie-chart-home"></svg>
				<div className="margin-top-10">
					<div className="status-header">{strings.trainingStatus}</div>					
				</div>
			</div>
		);
	}
}

//<div className={"status-message " + trainingStatusColor }>{TrainingStatus}</div>
