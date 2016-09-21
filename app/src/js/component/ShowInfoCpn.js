'use strict'
import React from 'react';

class ShowInfoCpn extends React.Component {
    static propTypes: {
        info: React.propTypes.string.isRequired
    };

    render() {
        return (
            <div>{this.props.info}</div>
        );
    }
}

export default ShowInfoCpn;