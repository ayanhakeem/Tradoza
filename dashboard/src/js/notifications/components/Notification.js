import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";
import * as NotificationsActions from "../actions";

class Notification extends React.Component {
    
    onClick(id, e){
        this.props.actions.notifDismiss(id);       
    }

	render(){
		
		var notifications = this.props.notifications.small.map((notification, i) => 
			<div key={notification.id} className={" notification " + notification.color} >
				<span key={i+1000} className="align-center ">{notification.text}</span>
			    <i onClick={this.onClick.bind(this, notification.id)} className="fa fa-close" style={{marginLeft: '10PX', cursor: 'pointer'}}></i>
            </div>
		);
		
		return(
			<div className="notification-container">
				{notifications}
            </div>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(NotificationsActions, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notification);
