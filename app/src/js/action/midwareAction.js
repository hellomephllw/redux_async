'use strict'
const CLICK_SHOWINFO = 'CLICK_SHOWINFO';
const CLICK_LOADING = 'CLICK_LOADING';
const CLICK_SHOWINFO_ASYNC = 'CLICK_SHOWINFO_ASYNC';

let midwareActionCreator = info => {
    console.log('pass action');
    return {
        type: CLICK_SHOWINFO,
        info: info
    };
};

let midwareThunkActionCreator = info => dispatch => {
    dispatch({
        type: CLICK_LOADING,
        info: 'loading...'
    });
    console.log('pass action');
    setTimeout(() => {
        console.info('pass action after 2s');
        dispatch({
            type: "CLICK_SHOWINFO_ASYNC",
            info: info
        });
    }, 2000);
    console.log('end action');
};

export {CLICK_SHOWINFO, CLICK_SHOWINFO_ASYNC, CLICK_LOADING, midwareActionCreator, midwareThunkActionCreator};