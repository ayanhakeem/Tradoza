var $ = require("jquery");
import * as LegacyUtils from "../../utils/legacySystemUtils";
import strings from "../../localization";

export const userLevel = [
	strings.myDashboard,
	strings.myDirectReports,
	strings.myCompany
];

/* hide
 * 0 my dashboard
 * 1 my direct reports
 * 2 my company
 */
export const tabs = [ 
	{"icon": "fa fa-pencil", "title": strings.signaturesNeeded, "hide": [2], "countField": "SignaturesNeeded"},
	{"icon": "fa fa-clock-o", "title": strings.itemsPastDue, "hide": [], "countField": "ItemsPastDue"},
	{"icon": "fa fa-comments-o", "title": strings.newComments, "hide": [2, 1], "countField": "NewComments"},
	{"icon": "fa fa-newspaper-o", "title": strings.newActivities, "hide": [2, 1], "countField": "NewActivities"},
	{"icon": "fa fa-bolt", "title": strings.newAssignments, "hide": [2, 1], "countField": "NewAssignments"},
	{"icon": "fa fa-table", "title": strings.savedReports, "hide": [2], "countField": "SavedReport"},
];

// DEV EXTREME TABLES

export const odataSources = {
    signatures: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"}
    ],
     itemsPastDue: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"}
    ],
    newComments: [
       {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
    ],
    newActivities: [
       {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
    ],
    newAssignments: [
		{"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
    ],
    trainingPastDue: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"}
    ],
    trainingCommingDue: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
    ],
    trainingPastDue: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
    ],
    trainingComplete: [
        {"key":"WorkflowStepId", "url": "odata/MyDashboardSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
        {"key":"WorkflowStepId", "url": "odata/MyTeamSignatures"},
    ],
};

export const devxMySignatures = [
        {
            dataField: "CanDelegate",
            verticalAlign: 'middle', 
            caption: "",
            width: 35,
            alignment : 'left',
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function (container, options) {
               	if(!options.data.CanDownload){
					$("<i class='fa fa-cloud-download alto-text'></i>")
                        .appendTo(container)
                }else{
                	$("<i class='fa fa-cloud-download malibu-text click'></i>")
                        .appendTo(container)
                        .on("click", function(){  
                            LegacyUtils.downloadAction(
                                options.data.ItemType, 
                                options.data.ItemId,  
                                options.data.ItemName,  
                                function(){console.log("onOpen")},   
                                function(){console.log("onClose")} 
                            )
                        })

                }
            },
            headerCellTemplate: function (header, info) {
            }
        }, 
        {
            dataField: "",
            caption: "",
            verticalAlign: 'middle', 
            width: 45,
            alignment : 'left',
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function (container, options) {
                if(!options.data.CanView){
					$("<i class='fa fa-eye alto-text'></i>").appendTo(container);
                }else{
					$("<i class='fa fa-eye malibu-text click'></i>").appendTo(container)
                        .on("click", function(){  
                            console.log( 'PdfViewer',
                                'PdfDownloader.ashx?q=1*' + options.data.ItemId,  
                                options.data.ItemName,  
                                function(){console.log("onOpen")},   
                                function(){console.log("onClose")} )
                            
                            LegacyUtils.showLegacyPopup(
                                'PdfViewer',
                                'PdfDownloader.ashx?q=1*' + options.data.ItemId,  
                                options.data.ItemName,  
                                function(){console.log("onOpen")},   
                                function(){console.log("onClose")} 
                            );
                        })
				}
            },
            headerCellTemplate: function (header, info) {
            }
        },
        {
            dataField: 'ItemName',
            alignment : 'left',
            width: 300,
            cssClass: 'malibu-text click',
            verticalAlign: 'middle' 
        }, 
        {
            dataField: "Workflow",
            width: 250,
            verticalAlign: 'middle', 
            alignment : 'center',
            cssClass: 'mine-shaft-text'
        },
        {
            dataField: "",
            caption: "Delegate",
            verticalAlign: 'middle', 
            alignment : "center",
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function (container, options) {
				if(!options.data.CanDelegate){
					$("<i class='fa fa-user-plus alto-text'></i>").appendTo(container);	
				}else{
                    $("<i class='fa fa-user-plus click'></i>").appendTo(container)
                        // .on("click", function(){  
                        //     LegacyUtils.showLegacyPopup(
                        //         'WorkflowActionItemDocumentReview',
                        //         'load|' + options.data.WorkflowStepId,  
                        //         options.data.ItemName,  
                        //         function(){console.log("onOpen")},   
                        //         function(){console.log("onClose")} 
                        //     );
                        // })
                        .on("click", function(){  
                            var p = _GetRegisteredUserControlRef('DelegateWorkflowStepPopup');
                            if (p != null) {
                                p.RegisterCallback_Success(function(){console.log("onOpen")}, function(){console.log("onClose")} );
                                p.Show('load|' + options.data.WorkflowStepId);
                            }

                        })
				}
            },
        },
        {
            dataField: "",
            caption: "Execute",
            verticalAlign: 'middle', 
            alignment : 'center',
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function (container, options) {
               $("<i class='fa fa-pencil malibu-text click'></i>").appendTo(container)
                    .on("click", function(){  
                            LegacyUtils.showLegacyPopup(
                                'WorkflowStepAction',
                                'l|' + options.data.WorkflowStepId,  
                                null, 
                                function () { WaiAuthVerified(s, 'a'); }
                            );
                        })
            },
        },
        {
            dataField: "",
            caption: "Reject",
            verticalAlign: 'middle', 
            alignment : 'center',
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function (container, options) {
               $("<i class='fa fa-close flush-text click'></i>").appendTo(container); 
            },
        },

    ];


export const devxTeamSignatures = [
        {
            dataField: 'UserName',
            alignment : 'left',
            cssClass: 'mine-shaft-text',
            verticalAlign: 'middle' 
        }, 
        {
            dataField: "ItemName",
            alignment : 'center',
            verticalAlign: 'middle', 
            cssClass: 'malibu-text click'
        },
        {
            dataField: "Workflow",
            alignment : 'center',
            verticalAlign: 'middle', 
            cssClass: 'mine-shaft-text'
        }
    ];

export const devxMyItemPastDue = [
    {
        dataField: "",
        caption: "",
        verticalAlign: 'middle', 
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        verticalAlign: 'middle', 
        cssClass: 'mine-shaft-text',
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        verticalAlign: 'middle', 
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        verticalAlign: 'middle', 
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxTeamItemPastDue = [
    {
        dataField: "",
        caption: "",
        width: 70,
        verticalAlign: 'middle', 
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        verticalAlign: 'middle', 
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        verticalAlign: 'middle', 
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxCompanyItemPastDue = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        verticalAlign: 'middle', 
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        verticalAlign: 'middle', 
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        alignment : 'center',
        verticalAlign: 'middle', 
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyNewComments = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-eye malibu-text click'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Author",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyNewActivity = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-eye malibu-text click'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Author",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyNewAssignments = [
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "ReviewDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "Status",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyTrainingCommingDue = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text click'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        caption: "Document Name",
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxTeamTrainingCommingDue = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        alignment : 'center',
        caption: "Document Name",
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxCompanyTrainingCommingDue = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        alignment : 'center',
        caption: "Document Name",
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyTrainingComplete = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxTeamTrainingComplete = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        alignment : 'center',
        cssClass: 'malibu-text click',
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxCompanyTrainingComplete = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        alignment : 'center',
        cssClass: 'malibu-text click',
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxMyTrainingPastDueRow = [
    {
        dataField: "",
        caption: "",
        width: 70,
        alignment : 'left',
        allowFiltering: false,
        allowSorting: false,
        cellTemplate: function (container, options) {
           $("<i class='fa fa-cloud-download malibu-text'></i>").appendTo(container); 
        },
        headerCellTemplate: function (header, info) {
        }
    },
    {
        dataField: 'ItemName',
        caption: "Document Name",
        alignment : 'left',
        cssClass: 'malibu-text click',
        verticalAlign: 'middle' 
    }, 
    {
        dataField: "Type",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: "Train",
        alignment : 'center',
        cssClass: 'malibu-text click'
    },
];

export const devxTeamTrainingPastDueRow = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        caption: "Document Name",
        alignment : 'center',
        cssClass: 'malibu-text click',
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];

export const devxCompanyTrainingPastDueRow = [
    {
        dataField: "UserName",
        alignment : 'left',
        cssClass: 'mine-shaft-text'
    },
    {
        dataField: 'ItemName',
        caption: "Document Name",
        alignment : 'center',
        cssClass: 'malibu-text click',
    }, 
    {
        dataField: "DueDate",
        alignment : 'center',
        cssClass: 'mine-shaft-text'
    },
];
