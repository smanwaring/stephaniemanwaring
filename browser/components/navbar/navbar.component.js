import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar-center">
                    <Link to={'/hello'}><div className="navbar-text">hello</div></Link>
                    <Link to={'/about'}><div className="navbar-text">about</div></Link>
                    <Link to={'/projects'}><div className="navbar-text">projects</div></Link>
                    <Link to={'/presentations'}><div className="navbar-text">presentations</div></Link>
                    <div className="navbar-text">resume</div>  
                    <div className="navbar-text">contact</div>                     
                </div>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

function mapStateToProps(state){
	return {
	};
}

function mapDispatchToProps(dispatch){
	return {
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
