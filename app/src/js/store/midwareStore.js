'use strict'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import midwareReducer from '../reducer/midwareReducer';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

export default initialState => createStoreWithMiddleware(midwareReducer, initialState);