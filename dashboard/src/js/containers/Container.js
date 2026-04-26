import React from "react";
import SideBar from "../components/SideBar";
import Modal from "../modals/views";
import Notification from "../notifications/components/Notification";
import BigNotification from "../notifications/components/BigNotification";
import * as NotificationsActions from "../notifications/actions";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as DocumentsActions from "../home/actions/DocumentsActions";
import * as SignaturesActions from "../home/actions/SignaturesActions";
import * as HomeActions from "../home/actions/HomeActions";
import Loader from "../components/Loader";

class Container extends React.Component {
	constructor(){
		super();
		this.state = {
			"notification": "Welcome to our new dashboard."
		};
	}

	componentDidMount() {
		// This function changes the background of the legacy system to make it compatible
		if(this.props.location.pathname !== "/"){
			var mainDiv = document.getElementById("tmplMain")
			if(mainDiv) mainDiv.style.background = "#4a4a4a";
		}

		var nextDate = new Date(Date.now() - 30*60000);
		if(this.props.counts.lastUpdated <= nextDate) this.props.homeActions.getCounts();

       	const {notification} = this.state; 
       	if(notification !== ""){
	       	var instance = this;
	       	setTimeout(function() {
				
				instance.props.notificationsActions.notifSend({
					text: notification,
					color: "minsk",
					// dismissAfter: 5000
				});

				instance.props.notificationsActions.bigNotifSend({
					text: "Hello this is a big notification"
				});

				setTimeout(function() {
					instance.setState({notification: ""});
				}, 5000); 

			}, 2000);     	
       }
	}

	render(){
		var { props } = this;

		if(this.props.counts.receiving){
			return(<Loader visible={true} fullPage={true} />);
		}

		return(
			<div>
				<Notification />
				<SideBar location={props.location} />
				<Modal />
				<div className="main-content">
					<BigNotification />
					{  
						React.Children.map(this.props.children, function(child) {
							return React.cloneElement(
								child, 
								{ ...props}
							);
						})
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
};

function mapDispatchToProps(dispatch) {
	return {
		documentsActions: bindActionCreators(DocumentsActions, dispatch),
		notificationsActions: bindActionCreators(NotificationsActions, dispatch),
		homeActions: bindActionCreators(HomeActions, dispatch),
		actions: bindActionCreators({...SignaturesActions}, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);