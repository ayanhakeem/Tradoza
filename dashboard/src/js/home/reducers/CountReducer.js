import {createReducer} from '../../utils';
// Add the following for IE compatability
// Object.assign = Object.assign || require('object-assign'); 

const initialState = {
   'receiving': false,
   'lastUpdated': 0,
   'myCounts': {
        ItemsPastDue:0,
        NewActivities:0,
        NewAssignments:0,
        NewComments:0,
        SavedReport:0,
        SignaturesNeeded:0,
        TrainingRecordsCompliant: 0,
        TrainingRecordsPastDue: 0,
        TrainingRecordsAtRisk: 0,
        TrainingStatus: ""
   },
   'myTeamCounts': {
        ItemsPastDue:0,
        NewActivities:0,
        NewAssignments:0,
        NewComments:0,
        SavedReport:0,
        SignaturesNeeded:0,
        TrainingRecordsCompliant: 0,
        TrainingRecordsPastDue: 0,
        TrainingRecordsAtRisk: 0,
        TrainingStatus: ""
   },
   'myCompanyCounts': {
        ItemsPastDue:0,
        NewActivities:0,
        NewAssignments:0,
        NewComments:0,
        SavedReport:0,
        SignaturesNeeded:0,
        TrainingRecordsCompliant: 0,
        TrainingRecordsPastDue: 0,
        TrainingRecordsAtRisk: 0,
        TrainingStatus: ""
   },
};

export default createReducer(initialState, {
    ['RECEIVED_MY_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'myCounts': payload
        });
    },
    ['RECEIVED_TEAM_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'myTeamCounts': payload
        });
    },
    ['RECEIVED_COMPANY_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'myCompanyCounts': payload
        });
    },
    ['RETRIVING_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': true
        });
    },
    ['FINISH_RECEIVING_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': false,
            'lastUpdated': Date.now()
        });
    },
    ['ERROR_RECEIVING_COUNTS']: (state, payload) => {
        return Object.assign({}, state, {
            'receiving': false
        });
    }
});
