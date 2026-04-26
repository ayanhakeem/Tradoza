export const pipelineRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"Docuemnt Name",
		"Type",
		"Due Date",
		"Train"
	],
	headerClasses: [
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "name"
		},
		{
			type: "text",
			dataRowName: "type",
			className: ""
		},
		{
			type: "text",
			dataRowName: "dueDate",
			className: ""
		},
		{
			type: "text",
			dataRowName: "train",
			className: ""
		}
	]
};

export const statusRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"Docuemnt Name",
		"Type",
		"Due",
		"Date",
		"Train"
	],
	headerClasses: [
		"",
		"first-col",
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "name"
		},
		{
			type: "text",
			dataRowName: "type",
			className: ""
		},
		{
			type: "text",
			dataRowName: "dueDate",
			className: ""
		},
		{
			type: "text",
			dataRowName: "date",
			className: ""
		},
		{
			type: "text",
			dataRowName: "train",
			className: ""
		}
	]
};

export const generalRow = {
	userLevels: [
		1,
		2
	],
	headers: [
		"User Name",
		"Document Name",
		"Due Date"
	],
	headerClasses: [
		"",
		"",
		""
	],
	rowStructure:[
		{
			type: "text",
			dataRowName: "username",
			className: ""
		},
		{
			type: "link",
			color: "malibu-text",
			className: "click",
			dataRowName: "name"
		},
		{
			type: "text",
			dataRowName: "dueDate",
			className: ""
		}
	]
};

export const userLevel = [
	"My Training",
	"My Direct Reports",
	"My Company"
];

export const chartLevel = [
	"Draft",
	"Reviewed",
	"Approved/ Effective",
	"Rejected",
	"Active Workflow"
];

export const tabs = [ 
	{"icon": "fa fa-file-o", "title": "new documents assigments", "class": "" ,"amount": 4, "hide": ["My Company", "My Direct Reports"]},
	{"icon": "fa fa-comment-o", "title": "documents with new comments", "class": "" , "amount": 4, "hide": ["My Company", "My Direct Reports"]}
];