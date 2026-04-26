export const recentRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"CAPA ID",
		"State",
		"Site",
		"Headline",
		"Imp. Date",
		"Assignee"
	],
	headerClasses: [
		"",
		"first-col",
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
			dataRowName: "headline",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		},
		{
			type: "text",
			dataRowName: "assignee",
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
		"state",
		"Comment Author",
	],
	headerClasses: [
		"",
		"",
		"first-col",
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
		"CAPA ID",
		"State",
		"Site",
		"Headline",
		"Imp. Date",
		"Assignee"
	],
	headerClasses: [
		"",
		"first-col",
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
			dataRowName: "headline",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		},
		{
			type: "text",
			dataRowName: "assignee",
			className: ""
		}
	]
};

export const userLevel = [
	"My CAPAs",
	"My Direct Reports",
	"My Company"
];

export const chartLevel =  [
	"Complete",
	"Draft", 
	"Implementation"
];

export const tabs = [ 
	{"icon": "fa fa-exclamation", "title": "CAPAs with recent activity", "class": "" ,"amount": 4, "hide": ["My Company", "My Direct Reports"]},
	{"icon": "fa fa-comment-o", "title": "CAPAs with new comments", "class": "" , "amount": 4, "hide": ["My Company", "My Direct Reports"]}
];