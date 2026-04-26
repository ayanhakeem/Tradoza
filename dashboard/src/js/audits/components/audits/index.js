export const recentRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"Audit ID",
		"Site Name",
		"State",
		"Due Date",
		"Lead Author",
	],
	headerClasses: [
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "siteName",
			className: ""
		},
		{
			type: "text",
			dataRowName: "state",
			className: ""
		},
		{
			type: "text",
			dataRowName: "dueDate",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
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
		"Audit ID",
		"State",
		"Comment Author",
		"Date of Comment"
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
			dataRowName: "state",
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
		"Audit ID",
		"Site Name",
		"State",
		"Due Date",
		"Lead Author",
	],
	headerClasses: [
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "id"
		},
		{
			type: "text",
			dataRowName: "siteName",
			className: ""
		},
		{
			type: "text",
			dataRowName: "state",
			className: ""
		},
		{
			type: "text",
			dataRowName: "dueDate",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
			className: ""
		}
	]
};

export const userLevel = [
	"My Audits",
	"My Direct Reports",
	"My Company"
];

export const chartLevel =  [
	"Targeted",
	"Scheduled",
	"Execution",
	"Pub Final report",
	"Sent to Auditee",
	"Active Workflows"
];

export const tabs =[ 
	{"icon": "fa fa-exclamation", "title": "audits with recent activity", "class": "" ,"amount": 4, "hide": ["My Direct Reports", "My Company"]},
	{"icon": "fa fa-comment-o", "title": "audits with new comments", "class": "" , "amount": 4, "hide": ["My Direct Reports", "My Company"]}
];