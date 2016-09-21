'use strict'
import React from 'react';

class InputCpn extends React.Component {

    static propTypes: {
        inputInfoHandler: React.propTypes.func.isRequired,
        inputOutHandler: React.propTypes.func.isRequired
    };

    inputInfoTrigger() {
        let value = this.refs.input.value;
        this.props.inputInfoHandler(value);
    }
    inputOutTrigger() {
        this.props.inputOutHandler();
    }

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={() => this.inputInfoTrigger()}>ensure</button>
                <button onClick={() => this.inputOutTrigger()}>ensure</button>
            </div>
        );
    }

}

export default InputCpn;