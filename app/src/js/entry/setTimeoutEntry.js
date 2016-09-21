'use strict'
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SetTimeoutContainer from '../container/SetTimeoutContainer';
import setTimeoutReducers from '../reducer/setTimeoutReducer';

let store = createStore(setTimeoutReducers);

render(
    <Provider store={store}>
        <SetTimeoutContainer />
    </Provider>,
    document.getElementById("main")
);