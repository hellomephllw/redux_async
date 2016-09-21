'use strict'
import React from 'react';
import InnerCpn from './InnerCpn';

class ClickCpn extends React.Component {
    static propTypes: {
        showInfoDispather: React.propTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <button onClick={(e) => this.props.clickHandler(e)}>ShowInfo</button>
                <InnerCpn clickHandler={this.props.clickHandler}/>
            </div>
        );
    }
}

export default ClickCpn;