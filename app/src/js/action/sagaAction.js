'use strict'

const CLICK_SHOWINFO_REQUEST = 'CLICK_SHOWINFO_REQUEST';
const CLICK_SHOWINFO_LOADING = 'CLICK_SHOWINFO_LOADING';
const CLICK_SHOWINFO_FINISH = 'CLICK_SHOWINFO_FINISH';
const CLICK_INPUT_REQUEST = 'CLICK_INPUT_REQUEST';
const CLICK_INPUT_SUCCESS = 'CLICK_INPUT_SUCCESS';
const CLICK_INPUT_OUT = 'CLICK_INPUT_OUT';

let clickRequestActionCreator = info => ({
    type: CLICK_SHOWINFO_REQUEST,
    info
});
let clickLoadingActionCreator = info => ({
    type: CLICK_SHOWINFO_LOADING,
    info
});
let clickFinishActionCreator = info => ({
    type: CLICK_SHOWINFO_FINISH,
    info
});
let inputRequestActionCreator = input => ({
    type: CLICK_INPUT_REQUEST,
    input
});
let inputSuccessActionCreator = input => ({
    type: CLICK_INPUT_SUCCESS,
    input
});
let inputOutActionCreator = () => ({
    type: CLICK_INPUT_OUT,
    input: 'already out'
});

export {
    CLICK_SHOWINFO_REQUEST,
    CLICK_SHOWINFO_LOADING,
    CLICK_SHOWINFO_FINISH,
    CLICK_INPUT_REQUEST,
    CLICK_INPUT_SUCCESS,
    CLICK_INPUT_OUT,
    clickRequestActionCreator,
    clickLoadingActionCreator,
    clickFinishActionCreator,
    inputRequestActionCreator,
    inputSuccessActionCreator,
    inputOutActionCreator
};