import React from "react";
import Config from "Config";
var $ = require("jquery");
var DevExpress = require("devextreme/bundles/modules/core");
DevExpress.dxDataGrid = require("devextreme/ui/data_grid")
DevExpress.DataSource = require("devextreme/data/data_source");
DevExpress.OData = require("devextreme/data/odata/store");
var userID = window.userId  ? window.userId : "9830DE85-8779-E611-94A2-12C2263AEE67"

export default class DevxTable extends React.Component {

	constructor(){
        super();
        this.renderTable = this.renderTable.bind(this);
	}

	showColumnChooser(){
		  var dataGrid = $('#gridContainer').dxDataGrid('instance');
            dataGrid.showColumnChooser();
	}

    componentDidMount(){
        this.renderTable(this.props.columns, this.props.dataSource);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.columns !== this.props.columns || nextProps.dataSource !== this.props.dataSource){
            this.renderTable(nextProps.columns, nextProps.dataSource);
        }
    }

	renderTable(columns, dataSource) {
		var gridDataSource = new DevExpress.OData({
	            key: dataSource.key,
	            keyType: "Guid",
	            url: Config.urls.odata + dataSource.url  + '?userId=' + userID,
	            version: 4
	    });

		$("#gridContainer").dxDataGrid({
		    dataSource: gridDataSource,
			columnFixing: { 
			    enabled: true
			},
			paging: {
		        pageSize: 10
		    },
		    pager: {
		        showPageSizeSelector: true,
		        allowedPageSizes: [5, 10, 20],
		    },
		    wordWrapEnabled: true,
		    columns: columns 		
            
        });
	}

	render(){

		return(
			<div>
				<div id="fieldChooserContainer"></div>
				<div id="gridContainer"></div>
			</div>		
		);
	}
}
