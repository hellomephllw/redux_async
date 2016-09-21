'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store/sagaStore';
import SagaContainer from '../container/SagaContainer';

render(
    <Provider store={store}>
        <SagaContainer />
    </Provider>,
    document.getElementById('main')
);