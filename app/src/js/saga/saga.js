'use strict'
import {takeEvery, takeLatest} from 'redux-saga';
import {call, put, fork, take, select} from 'redux-saga/effects';
import {
    CLICK_SHOWINFO_FINISH,
    CLICK_SHOWINFO_LOADING,
    CLICK_SHOWINFO_REQUEST,
    CLICK_INPUT_REQUEST,
    CLICK_INPUT_SUCCESS,
    CLICK_INPUT_OUT,
    clickFinishActionCreator,
    clickLoadingActionCreator,
    clickRequestActionCreator,
    inputRequestActionCreator,
    inputSuccessActionCreator,
    inputOutActionCreator
} from '../action/sagaAction';

function asyncFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('information from server...'), 3000);
    }).then(info => ({info}))
        .catch(err => ({err}));
}

function* workerSaga() {
    yield put(clickLoadingActionCreator('loading...'));
    let {info, err} = yield call(asyncFetch);
    console.log('finish fetch');
    yield put(clickFinishActionCreator(info != undefined ? info : err));
}

function* dealClick() {
    while(true) {
        console.log('dealclick: begin request');
        let action = yield take(CLICK_INPUT_REQUEST);
        console.log('dealclick: finish request');

        let state = yield select();
        console.log('state:' + state);

        yield fork(dealInput);
    }
}

function* dealInput() {
    while(true) {
        console.log('dealclick: begin out');
        let action2 = yield take('*');
        console.log('dealclick: finish out');
    }
}

function* saga() {
    //yield* takeLatest(CLICK_SHOWINFO_REQUEST, workerSaga);
    //while(true) {
    //    console.log('in saga');
    //    let action = yield take(CLICK_SHOWINFO_REQUEST);
    //    console.log('test take:' + JSON.stringify(action));
    //}
    //yield fork(takeLatest, CLICK_SHOWINFO_REQUEST, workerSaga);
    //yield fork(takeEvery, 'THE_OTHER_REQUEST', () => 'nothing to do');



    yield fork(dealClick);
}

export default saga;