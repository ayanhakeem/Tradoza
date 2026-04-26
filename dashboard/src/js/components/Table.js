import React from "react";
import shallowCompare from "react-addons-shallow-compare";

export default class Table extends React.Component {

	constructor(){
		super();
		this.getPagination = this.getPagination.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
	  	return shallowCompare(this, nextProps, nextState);
	}

	getHeaders(){
		return this.props.headers.map( (index, i) =>  <th key={i}>{index}</th> );
	}

	getPagination(){
		var {pages, current} = this.props;
		var pagesList = [];
		const back = current - 1,
		 	  forward = current + 1;

		for (var i = 0; i < pages; i++) {
			var humanNumber = i + 1;
			pagesList.push(<li key={i} className={current - 1 === i ? "active" : ""}><a onClick={this.props.handlePageChange.bind(this, humanNumber)}>{humanNumber}</a></li>);
		}

		return(
			<ul>
				<li><a onClick={this.props.handlePageChange.bind(this, back)}><i className="fa fa-angle-left"></i></a></li>
				{ pagesList }
				<li><a onClick={this.props.handlePageChange.bind(this, forward)}><i className="fa fa-angle-right"></i></a></li>
			</ul>
		);
	}

	render(){
		const headers = this.getHeaders();
		return(
			<div>
				<table className="table">
					<thead>
						<tr>
							{headers}
						</tr>
					</thead>
					<tbody>
						{this.props.children}
					</tbody>
				</table>	
				<div className="pagination">
					{this.getPagination()}
				</div>
			</div>
		);
	}
}
