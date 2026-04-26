import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";
import * as NotificationsActions from "../actions";

class BigNotification extends React.Component {
    
    onClick(id, e){
        this.props.actions.bigNotifDismiss(id);       
    }

	render(){
		
		var notifications = this.props.notifications.big.map((notification, i) => 
			<div key={notification.id} className={" error " + notification.color} style={{margin: 0}}>
				<span key={i+1000} className="align-center ">{notification.text}</span>
			    <i onClick={this.onClick.bind(this, notification.id)} className="fa fa-close" style={{marginLeft: '10PX', cursor: 'pointer', float: 'right'}}></i>
            </div>
		);
		
		return(
			<div className="">
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
)(BigNotification);
