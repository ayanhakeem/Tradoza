import * as defaultHeader from "../../api"
import {keepSessionAlive} from "../../utils"

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
