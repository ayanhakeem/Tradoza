export const recentRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"Issue ID",
		"Type",
		"State",
		"Lead Investigator",
		"Site",
		"Date Reported",
		"CAPAs"
	],
	headerClasses: [
		"",
		"first-col",
		"",
		"",
		"",
		"",
		"",
		"",
		
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "type",
			className: ""
		},
		{
			type: "text",
			dataRowName: "state",
			className: ""
		},
		{
			type: "text",
			dataRowName: "leadInvestigator",
			className: ""
		},
		{
			type: "text",
			dataRowName: "site",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		},
		{
			type: "text",
			dataRowName: "capas",
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
		"Issue ID",
		"Type",
		"State",
		"Site",
		"Comment Author",
	],
	headerClasses: [
		"",
		"",
		"first-col",
		"",
		"",
		"",
		"",
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "type",
			className: ""
		},
		{
			type: "text",
			dataRowName: "state",
			className: ""
		},
		{
			type: "text",
			dataRowName: "site",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
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
		"Issue ID",
		"Type",
		"State",
		"Lead Investigator",
		"Site",
		"Date Reported",
		"CAPAs"
	],
	headerClasses: [
		"",
		"first-col",
		"",
		"",
		"",
		"",
		"",
		"",
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "type",
			className: ""
		},
		{
			type: "text",
			dataRowName: "state",
			className: ""
		},
		{
			type: "text",
			dataRowName: "leadInvestigator",
			className: ""
		},
		{
			type: "text",
			dataRowName: "site",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		},
		{
			type: "text",
			dataRowName: "capas",
			className: ""
		}
	]
};

export const userLevel = [
	"My Issues",
	"My Direct Reports",
	"My Company"
];

export const chartLevel =  [
	"Draft",
	"Awaiting Approval",
	"Implementation",
	"Final Review",
	"Closed",
	"Awaiting E.C.",
	"Effective",
	"Failed"
];

export const tabs = [ 
	{"icon": "fa fa-exclamation", "title": "issues with recent activity", "class": "" ,"amount": 4, "hide": ["My Company", "My Direct Reports"]},
	{"icon": "fa fa-comment-o", "title": "issues with new comments", "class": "" , "amount": 4, "hide": ["My Company", "My Direct Reports"]}
];