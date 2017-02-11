
import React, { Component } from 'react';
import Navbar from './navbar/navbar.component';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}