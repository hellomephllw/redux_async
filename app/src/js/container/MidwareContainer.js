'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {midwareActionCreator, midwareThunkActionCreator} from '../action/midwareAction';
import ClickCpn from '../component/ClickCpn';
import ShowInfoCpn from '../component/ShowInfoCpn';

class MidwareContainer extends React.Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        //this.props.dispatch(midwareActionCreator("some thing"));
        this.props.dispatch(midwareThunkActionCreator("some thing"));
    }

    render() {
        console.info('render container');
        return (
            <div>
                <ClickCpn clickHandler={this.clickHandler} />
                <ShowInfoCpn info={this.props.info} />
            </div>
        );
    }

}

export default connect(state => ({
    info: state.midware.info
}))(MidwareContainer);