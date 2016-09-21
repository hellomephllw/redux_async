'use strict'
import React from 'react';

class InnerCpn extends React.Component {

    render() {
        return (
            <div>
                <button onClick={e => this.props.clickHandler(e)}>inner btn</button>
            </div>
        );
    }

}

export default InnerCpn;