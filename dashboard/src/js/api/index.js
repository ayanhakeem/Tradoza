import          axios                       from "axios";
import          Config                      from 'Config';
import          * as NotificationsActions   from "../notifications/actions";

export var instance = axios.create({
	baseURL: Config.urls.api,
	timeout: Config.timeout,
		headers:{ 
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	transformRequest: function (data) {
		if(data != null){
			var str = [];
			data = data.data;
			for(var p in data)
			  if (data.hasOwnProperty(p) && data[p]) {
			    var text = data[p];
			    if(text == "null") { text = ""; }
			    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(text));
				}
				return str.join("&");
			}
		}
	});

export function errorParsing(data){

  var response = data.response,
      error300 = data.error300,
      notification = [],
      color = "red"; 
    
  if (response.status > 300 ) {
               
        if(response.data.error === "invalid_grant"){
            notification.push("Username or password incorrect.");
        
        }else if(response.data.detail != ""){
            notification.push(response.data.detail);
        }

        if(response.data != null){
            var keys = Object.keys(response.data);
            
            for (var i = keys.length - 1; i >= 0; i--) {
              if(response.data[ keys[i] ] == "This field is required."){
                notification.push(keys[i]+ " is required.");
              }
              else{
                notification.push(response.data[ keys[i] ]);
              }
            }

        }else{
            notification.push(error300.text);
        }   
        
    }else if (response.status > 201 ){
        notification.push(response.data);
    } 


    return function(dispatch){

          for (var i = notification.length - 1; i >= 0; i--) {
              var not = notification[i];
              if( not != null){
                  dispatch(NotificationsActions.notifSend({
                    text: not,
                    color: color,
                    dismissAfter: 2000
                  }))
            }
          }
    }
   
}
