export const recentRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"Observation ID",
		"Severity",
		"Status",
		"Action Due",
		"Auditor Assignee",
		"Auditee Assignee",
		"Site name",
	],
	headerClasses: [
		"",
		"first-col",
		"",
		"",
		"",
		"",
		"",
		""
	],
	rowStructure:[
		{
			type: "icon",
			color: "malibu-text",
			icon: "fa-cloud-download",
			className: "icon-row",
			dataRowName: ""
		},
		{
			type: "tooltipLink",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "severity",
			className: ""
		},
		{
			type: "text",
			dataRowName: "status",
			className: ""
		},
		{
			type: "text",
			dataRowName: "actionDue",
			className: ""
		},
		{
			type: "text",
			dataRowName: "auditorAssignee",
			className: ""
		},
		{
			type: "text",
			dataRowName: "auditeeAssignee",
			className: ""
		},
		{
			type: "text",
			dataRowName: "siteName",
			className: ""
		}
	]
};

export const newCommentsRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"",
		"Observation ID",
		"Status",
		"Date of Comment",
		"Comment Author"
	],
	headerClasses: [
		"",
		"",
		"first-col",
		"",
		"",
		""
	],
	rowStructure:[
		{
			type: "icon",
			color: "malibu-text",
			icon: "fa-cloud-download",
			className: "icon-row",
			dataRowName: ""
		},
		{
			type: "icon",
			color: "malibu-text",
			icon: "fa-eye",
			className: "icon-row",
			dataRowName: ""
		},
		{
			type: "tooltipLink",
			color: "malibu-text",
			className: "click first-col ",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "status",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		}
	]
};

export const generalRow = {
	userLevels: [
		0,
		1,
		2
	],
	headers: [
		"",
		"Observation ID",
		"Severity",
		"Status",
		"Action Due",
		"Auditor Assignee",
		"Auditee Assignee",
		"Site name",
	],
	headerClasses: [
		"",
		"first-col",
		"",
		"",
		"",
		"",
		"",
		""
	],
	rowStructure:[
		{
			type: "icon",
			color: "malibu-text",
			icon: "fa-cloud-download",
			className: "icon-row",
			dataRowName: ""
		},
		{
			type: "tooltipLink",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "severity",
			className: ""
		},
		{
			type: "text",
			dataRowName: "status",
			className: ""
		},
		{
			type: "text",
			dataRowName: "actionDue",
			className: ""
		},
		{
			type: "text",
			dataRowName: "auditorAssignee",
			className: ""
		},
		{
			type: "text",
			dataRowName: "auditeeAssignee",
			className: ""
		},
		{
			type: "text",
			dataRowName: "siteName",
			className: ""
		}
	]
};

export const userLevel = [
	"My Observations",
	"My Direct Reports",
	"My Company"
];

export const chartLevel =  [
	"Critical",
	"Major",
	"Minor",
	"Comment"
];

export const tabs = [ 
	{"icon": "fa fa-exclamation", "title": "observations with recent activity", "class": "" ,"amount": 4, "hide": ["My Company", "My Direct Reports"]},
	{"icon": "fa fa-comment-o", "title": "observations with new comments", "class": "" , "amount": 4, "hide": ["My Company", "My Direct Reports"]}
];