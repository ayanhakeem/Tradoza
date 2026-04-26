
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

// This function simulates an AJAX call
export function getDocuments(token){
	return function(dispatch){
		dispatch(retrivingDocuments());
		return setTimeout(function() {
			const data = {
				'count': 7,
				'pages': 10,
				'documents': [
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},				
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},	
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},
					{"doc": "Cool document 1", "workflow": "Document Approved", "link": "https://hello.com", "status": "V1", "username": "Nessim Btesh", "type": "Awesome Doc", "dueDate": "02/12/16", "name": "Color blue", "author": "Panos", "reviewDate": "01/01/2017", "date": "01/01/2017"},				
				]
			};
			dispatch(receivedDocuments(data));
		}, 1000);
	}
}