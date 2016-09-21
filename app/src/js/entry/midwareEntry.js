'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import MidwareContainer from '../container/MidwareContainer';
import midwareStore from '../store/midwareStore';

const store = midwareStore();

render(
    <Provider store={store}>
        <MidwareContainer />
    </Provider>,
    document.getElementById('main')
);