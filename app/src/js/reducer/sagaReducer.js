'use strict'
import {combineReducers} from 'redux';
import {CLICK_SHOWINFO_LOADING, CLICK_SHOWINFO_FINISH, CLICK_SHOWINFO_REQUEST} from '../action/sagaAction';

let sagaReducer = (state = {}, action) => {
    console.log(action.type + ' pass reducer');
    switch (action.type) {
        case CLICK_SHOWINFO_REQUEST:
            return {
                info: action.info
            };
        case CLICK_SHOWINFO_FINISH:
            return {
                info: action.info
            };
        case CLICK_SHOWINFO_LOADING:
            return {
                info: action.info
            };
        default:
            return state;
    }
};

export default combineReducers({
    saga: sagaReducer
});