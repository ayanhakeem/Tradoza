import * as defaultHeader from "../../api"
import {keepSessionAlive} from "../../utils"
// var Promise = require('es6-promise').Promise;
var generators;

export function finishedRecivingCounts(){
	return {
		type: 'FINISH_RECEIVING_COUNTS'
	};
}

export function receivedMyCounts(data){
	return {
		type: 'RECEIVED_MY_COUNTS',
		payload: data
	};
}

export function receivedTeamCounts(data){
	return {
		type: 'RECEIVED_TEAM_COUNTS',
		payload: data
	};
}

export function receivedCompanyCounts(data){
	return {
		type: 'RECEIVED_COMPANY_COUNTS',
		payload: data
	};
}

export function errorReceivingCounts(data){
	return {
		type: 'ERROR_RECEIVING_COUNTS'
	};
}

export function retrivingCounts(){
	return {
		type: 'RETRIVING_COUNTS'
	};
}

export function getCounts(token){
	return function(dispatch){
		generators = asynCounts(dispatch, token);
		generators.next();
	}
}

function *asynCounts(dispatch, token){
	yield dispatch(getMyCounts(token));
	yield dispatch(getTeamCounts(token));
	yield dispatch(getCompanyCounts(token));
	yield dispatch(finishedRecivingCounts());
}

export function getMyCounts(token){
	var userID = window.userId  ? window.userId : "9830DE85-8779-E611-94A2-12C2263AEE67"
    
    return function(dispatch){
		keepSessionAlive();
		dispatch(retrivingCounts());
		return defaultHeader.instance.get("/mydashboard/counts/" + userID)
		.then(function(response){
			generators.next();
			console.log(response.data.LanguageCode.slice(0, 2))
			localStorage.setItem('lang', response.data.LanguageCode.slice(0, 2));
			return dispatch(receivedMyCounts(response.data.Data));
		})
		.catch(function(response){
			return dispatch(errorReceivingCounts());
		})
	}
}

export function getTeamCounts(token){
	var userID = window.userId  ? window.userId : "9830DE85-8779-E611-94A2-12C2263AEE67"
	return function(dispatch){
		keepSessionAlive();
		// dispatch(retrivingCounts());
		return defaultHeader.instance.get("/myteam/counts/" + userID)
		.then(function(response){
			generators.next();
			return dispatch(receivedTeamCounts(response.data.Data));
		})
		.catch(function(response){
			return dispatch(errorReceivingCounts());
		})
	}
}

export function getCompanyCounts(token){
	var userID = window.userId  ? window.userId : "9830DE85-8779-E611-94A2-12C2263AEE67"
	return function(dispatch){
		keepSessionAlive();
		// dispatch(retrivingCounts());
		return defaultHeader.instance.get("/mycompany/counts/" + userID)
		.then(function(response){
			generators.next();
			return dispatch(receivedCompanyCounts(response.data.Data));
		})
		.catch(function(response){
			return dispatch(errorReceivingCounts());
		})
	}
}
