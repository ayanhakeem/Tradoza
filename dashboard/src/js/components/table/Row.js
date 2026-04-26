import React from "react";
import ToolTip from 'react-portal-tooltip'

export default class Row extends React.Component {

	constructor(){
		super();
		this.state ={
			isTooltipActive: false
		};
	}

    showTooltip() {
        this.setState({isTooltipActive: true})
    }

    hideTooltip() {
        this.setState({isTooltipActive: false})
    }

	getRow(row, i, data){
		switch(row.type){
			case "icon":
				return (
					<i className={"fa " + row.icon + " " + row.color}></i>
				);

			case "link":
				return (
					<a href={row.link} className="malibu-text click">
						{data[row.dataRowName]}
						{ row.mergeField ? " (" + data[row.mergeField] + ")" : "" }
					</a>				
				);

			case "text":
				return (
					data[row.dataRowName]
				);

			case "tooltipLink":
				return(
					<div>
						<a id={"d" + data[row.dataRowName] + "d"} href={row.link} className="malibu-text click" onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
							{data[row.dataRowName]}
						</a>
						<ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={"#d" + data[row.dataRowName] + "d"}>
			                <div>
			                    <p>This is the content of the tooltip</p>
			                </div>
			            </ToolTip>
			        </div>
				);
		}
	}

	render(){
		const {rowStructure, data} = this.props,
			row = rowStructure.map((index, i) => <td key={i} className={index.className}> {this.getRow(index, i, data)}</td>);
		return(
			<tr>
				{row}
			</tr>
		);
	}
}
