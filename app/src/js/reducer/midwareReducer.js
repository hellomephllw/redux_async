'use strict'
import {combineReducers} from 'redux';
import {CLICK_SHOWINFO, CLICK_SHOWINFO_ASYNC, CLICK_LOADING} from '../action/midwareAction';

let midwareReducer = (state = {}, action) => {
    console.info('pass reducer');
    switch (action.type) {
        case CLICK_SHOWINFO:
            return {
                info: action.info
            };
        case CLICK_SHOWINFO_ASYNC:
            return {
                info: action.info
            };
        case CLICK_LOADING:
            return {
                info: action.info
            }
        default:
            return state;
    }
};

export default combineReducers({
    midware: midwareReducer
});