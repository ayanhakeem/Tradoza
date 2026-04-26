import * as defaultHeader from "../../api"
import {keepSessionAlive} from "../../utils"

export function receivedDocuments(data){
	return {
		type: 'RECEIVED_DOCUMENTS',
		payload: data
	};
}

export function retrivingDocuments(){
	return {
		type: 'RETRIVING_DOCUMENTS'
	};
}

export function errorRetrivingDocuments(){
	return {
		type: 'ERROR_RETRIVING_DOCUMENTS'
	};
}

export function receivedSignatures(data){
	return {
		type: 'RECEIVED_SIGNATURES',
		payload: data
	};
}

export function retrivingSignatures(){
	return {
		type: 'RETRIVING_SIGNATURES'
	};
}

export function errorRetrivingSignatures(){
	return {
		type: 'ERROR_RETRIVING_SIGNATURES'
	};
}

export function getSignatures(token, page=1){
	return function(dispatch){
		keepSessionAlive();
		dispatch(retrivingSignatures());

		return defaultHeader.instance.get(`/mydashboard/signaturesneededpage/9830DE85-8779-E611-94A2-12C2263AEE67/${page}/10`)
		
		.then(function(response){
			return dispatch(receivedSignatures(response.data));
		})
		
		.catch(function(response){
			return dispatch(errorRetrivingSignatures());
		})
	
	}
}

// This function simulates an AJAX call
export function getDocuments(token){
	return function(dispatch){
		if(typeof(SessionExpiration) == "function") SessionExpiration.startKeepingAlive;
		dispatch(retrivingDocuments());
		return setTimeout(function() {
			const data = {
				'count': 7,
				'pages': 100,
				'documents': [
					{"doc": "I am a really long document Name I am a really long document Name I am a really long document Name", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1001, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1002, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1003, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1004, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1005, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1006, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1007, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1008, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "category": "Category 1", "date": "01/01/2017", "id": 1009, "siteName": "Phily", "auditDate": "02/12/16", "assignedTo": "Danial", "auditSite": "Cuba", "site": "Blue", "severity": "OMG", "headline": "Wrong Audit", "state": "Chilling", "leadInvestigator": "Ronaldino", "reportedDate": "03/14/2000", "capas": "1001", "actionDue": "Screen", "auditorAssignee": "Danial", "auditeeAssignee": "Big Mama", "leadAuthor": "Ice cream", "assignee": "Pene", "train": "something"},
				]
			};
			dispatch(receivedDocuments(data));
		}, 1000);
	}
}