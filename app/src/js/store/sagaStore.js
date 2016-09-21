'use strict'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaReducer from '../reducer/sagaReducer';
import saga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();

let initialState = {saga: {info: 'init things', input: 'plz input sth..'}};

const store = applyMiddleware(sagaMiddleware)(createStore)(sagaReducer, initialState);

sagaMiddleware.run(saga);

export default store;