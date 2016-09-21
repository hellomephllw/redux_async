'use strict'
import {createStore, combineReducers} from 'redux';
import {CLICK_SHOWINFO} from '../action/setTimeoutAction';

let initialState = {
    info: 'none'
};

let setTimeoutReducer = (state = initialState, action) => {
    console.log('pass reducer...action is ' + JSON.stringify(action));
    switch (action.type) {
        case CLICK_SHOWINFO:
            return {
                info: action.info
            };
        default:
            return state;
    }
};

export default combineReducers({
    setTimeout: setTimeoutReducer
});