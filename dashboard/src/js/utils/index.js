import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { replace }    from 'react-router-redux'

//This function creates the constants used in the action and reducer
export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
     return response.json()
}

export function findAndReplace(object, payload) {
  for (var i = object.length - 1; i >= 0; i--) {
    if(object[i].id == payload['id']){
        object[i] = payload;
        return object;
    }
  }
  return [payload];
}

export function animate(elem,style,unit,from,to,time,prop) {
    if(!elem) return;
    if(elem[style] === to) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if(step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

export function scrollToActionSection(){
    var element = document.getElementById('section');
    var main = document.getElementById('tmplMain');
    if(element) animate(main, "scrollTop", "", 0, element.offsetTop - 50, 300, true);
}

export const isObjectEqual = (obj1, obj2) => {
    if(!isObject(obj1) || !isObject(obj2)) {
        return false;
    }

    if (obj1 === obj2) {
       return true;
    }

   const item1Keys = Object.keys(obj1).sort();
   const item2Keys = Object.keys(obj2).sort();

   if (!isArrayEqual(item1Keys, item2Keys)) {
        return false;
   }
   return item2Keys.every(key => {
       const value = obj1[key];
       const nextValue = obj2[key];

       if (value === nextValue) {
           return true;
       }
       return Array.isArray(value) &&
           Array.isArray(nextValue) &&
           isArrayEqual(value, nextValue);
   });
};

export const isArrayEqual = (array1 = [], array2 = []) => {
    if (array1 === array2) {
        return true;
    }
    return array1.length === array2.length &&
        array1.every((item, index) => item === array2[index]);
};

export function keepSessionAlive(){
  if(typeof(SessionExpiration) == "function") SessionExpiration.startKeepingAlive;
}