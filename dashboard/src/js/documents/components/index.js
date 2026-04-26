export const newAssigmentsRow = {
	userLevels: [
		0
	],
	headers: [
		"",
		"",
		"Document Name",
		"Category",
		"Author",
		"Review Date"
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "doc"
		},
		{
			type: "text",
			dataRowName: "category",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
			className: ""
		},
		{
			type: "text",
			dataRowName: "reviewDate",
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
		"Document Name",
		"Category",
		"Comment Author",
		"Date of Comment"
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
			type: "link",
			color: "malibu-text",
			className: "click first-col",
			dataRowName: "name"
		},
		{
			type: "text",
			dataRowName: "category",
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
		"",
		"Document Name",
		"Category",
		"Author",
		"Review Date"
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
			type: "link",
			color: "malibu-text ",
			className: "click first-col",
			dataRowName: "name"
		},
		{
			type: "text",
			dataRowName: "category",
			className: ""
		},
		{
			type: "text",
			dataRowName: "author",
			className: ""
		},
		{
			type: "text",
			dataRowName: "reviewDate",
			className: ""
		}
	]
};

export const userLevel = [
	"My Documents",
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
	{"icon": "fa fa-file-o", "title": "new document assigments", "class": "" ,"amount": 4, "hide": ["My Company", "My Direct Reports"]},
	{"icon": "fa fa-comment-o", "title": "documents with new comments", "class": "" , "amount": 4, "hide": ["My Company", "My Direct Reports"]}
];
