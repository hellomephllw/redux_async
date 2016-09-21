'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {setTimeoutActionCreator} from '../action/setTimeoutAction';
import ClickCpn from '../component/ClickCpn';
import ShowInfoCpn from '../component/ShowInfoCpn';

class SetTimeoutContainer extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        console.log(e);
        this.props.dispatch(setTimeoutActionCreator("nothing"));
        setTimeout(() => this.props.dispatch(setTimeoutActionCreator("nothing")), 2000);
    }

    render() {
        console.log('render container');
        return (
            <div>
                <ClickCpn clickHandler={this.clickHandler} />
                <ShowInfoCpn info={this.props.info} />
            </div>
        );
    }
}

export default connect(state => ({
    info: state.setTimeout.info
}))(SetTimeoutContainer);