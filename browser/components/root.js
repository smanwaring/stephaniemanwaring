
import React, { Component } from 'react';
import Navbar from './navbar/navbar.component';
import Footer from './footer/footer.component';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}