import React from "react";
import shallowCompare from "react-addons-shallow-compare";
import Row from "./table/Row";
import ReactPaginate from 'react-paginate';

export default class Table extends React.Component {

	constructor(){
		super();
		this.getPagination = this.getPagination.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
	  	return shallowCompare(this, nextProps, nextState);
	}

	getHeaders(headers, classes){
		return headers.map( (index, i) =>  <th key={i} className={classes ? classes[i] : "" }>{index}</th> );
	}

	getPagination(){
		var {pages, current, handlePageChange} = this.props;
		return(
			<ReactPaginate previousLabel={<a><i className="fa fa-angle-left"></i></a>}
	                   nextLabel={<a><i className="fa fa-angle-right"></i></a>}
	                   breakLabel={<a>...</a>}
	                   breakClassName={"break-me"}
	                   pageNum={pages}
	                   marginPagesDisplayed={2}
	                   pageRangeDisplayed={5}
	                   clickCallback={handlePageChange}
	                   containerClassName={"pagination"}
	                   subContainerClassName={"pages pagination"}
	                   activeClassName={"active"} />
		);
	}

	getRows(rowStructure){
		return this.props.list.map((index, i) => <Row key={i} rowStructure={rowStructure} data={index} />)
	}

	render(){
		const tableStructure = this.props.rowStructure;
		
		if(tableStructure.userLevels.indexOf(this.props.userLevel) <= -1){
			return(
				<div className="placeholder-action-items">
					Click on dashboard items above to see more detail.
				</div>
			);
		}

		const 	headers = this.getHeaders(tableStructure.headers, tableStructure.headerClasses),
				rows = this.getRows(tableStructure.rowStructure);

		return(
			<div>
				<table className="table">
					<thead>
						<tr>
							{headers}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>	
				<div className="pagination">
					{this.getPagination()}
				</div>
			</div>
		);
	}
}
