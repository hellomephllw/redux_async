'use strict'
import React from 'react';
import {connect} from 'react-redux';
import {clickRequestActionCreator, inputRequestActionCreator, inputOutActionCreator} from '../action/sagaAction';
import ClickCpn from '../component/ClickCpn';
import InnerCpn from '../component/InnerCpn';
import ShowInfoCpn from '../component/ShowInfoCpn';
import InputCpn from '../component/InputCpn';
import ShowInputCpn from '../component/ShowInputCpn';

class SagaContainer extends React.Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.inputInfoHandler = this.inputInfoHandler.bind(this);
        this.inputOutHandler = this.inputOutHandler.bind(this);
    }

    clickHandler() {
        let info = "nothing";
        this.props.dispatch(clickRequestActionCreator(info));
    }
    inputInfoHandler(input) {
        this.props.dispatch(inputRequestActionCreator(input));
    }
    inputOutHandler() {
        this.props.dispatch(inputOutActionCreator());
    }

    render() {
        console.log('render container');
        return(
            <div>
                <ClickCpn clickHandler={this.clickHandler} />
                <ShowInfoCpn info={this.props.info} />
                <InputCpn inputInfoHandler={this.inputInfoHandler} inputOutHandler={this.inputOutHandler} />
                <ShowInputCpn inputInfo={this.props.input} />
            </div>
        );
    }

}

export default connect(state => ({
    info: state.saga.info,
    input: state.saga.input
}))(SagaContainer);