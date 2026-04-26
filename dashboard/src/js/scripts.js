import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Container from "./containers/Container";
import Dashboard from "./home/views/Dashboard";
import Training from "./training/views/Training";
import Documents from "./documents/views/Documents";
import Audits from "./audits/views/Audits";
import Observations from "./audits/views/Observations";
import Issues from "./issues/views/Issues";
import Capas from "./issues/views/Capas";

import configureStore from "./store";
import {Provider} from "react-redux";
import { syncHistoryWithStore} from "react-router-redux";

//The store is configured in store/index
let store = configureStore();
const app = document.getElementById("app");

//setting up enviorment in case we endup using react router 
const history = syncHistoryWithStore(hashHistory, store);

function scrollToTop(){
	var tmplMain = document.getElementById("tmplMain");
	tmplMain ? tmplMain.scrollTop = 0 : window.scrollTo(0, 0);
}

ReactDOM.render(
	<Provider store={store}>
		<Router onUpdate={() => scrollToTop()} history={history}>
			<Route path="/" component={Container} >
				<IndexRoute component={Dashboard} ></IndexRoute>
				<Route path="training" component={Training} />
				<Route path="documents" component={Documents} />
				<Route path="audits">
					<IndexRoute component={Audits} ></IndexRoute>
					<Route path="observations" component={Observations} />
				</Route>				
				<Route path="issues">
					<IndexRoute component={Issues} ></IndexRoute>
					<Route path="capas" component={Capas} />
				</Route> 
			</Route>
		</Router>
	</Provider>
	, app);