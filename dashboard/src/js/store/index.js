import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import createLogger from "redux-logger";

import thunk from "redux-thunk";
import {  routerReducer } from "react-router-redux";
import { routerMiddleware} from "react-router-redux";
import { hashHistory } from "react-router";
import AuthenticationReducer from "../auth/reducers/AuthenticationReducer";
import DocumentsReducer from "../home/reducers/DocumentsReducer";
import SignaturesReducer from "../home/reducers/SignaturesReducer";
import CountReducer from "../home/reducers/CountReducer";
import NotificationsReducer from "../notifications/reducers";

const combine = combineReducers({
    routing: routerReducer,
    auth: AuthenticationReducer,
    documents: DocumentsReducer,
    notifications: NotificationsReducer,
    counts: CountReducer,
    signatures: SignaturesReducer
 });

export default function configureStore(initialState = {}) {
	let createStoreWithMiddleware;

    const logger = createLogger();
    const Rmiddleware = routerMiddleware(hashHistory);
    const middleware = applyMiddleware(thunk, logger, Rmiddleware);
    createStoreWithMiddleware = compose(
     middleware,
    );

	const store = createStoreWithMiddleware(createStore)(combine, initialState);
	return store;
}