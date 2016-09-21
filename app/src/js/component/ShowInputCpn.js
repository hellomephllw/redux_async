'use strict'
import React from 'react';

class ShowInputCpn extends React.Component {

    static propTypes: {
        inputInfo: React.propTypes.string.isRequired
    };

    render() {
        return (
            <div>{this.props.inputInfo}</div>
        );
    }

}

export default ShowInputCpn;