import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Contact extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="spacer-sm">
                <h1>Get in touch</h1>
                <div className="wrapper">
                    <article className="main">
                        <div className="flex-container-contact">
                            <a href="https://stackoverflow.com/users/7370337/stephanie-manwaring?tab=profile"><i className="fa fa-stack-overflow fa-3x icon" aria-hidden="true"/></a>
                            <a href="https://github.com/smanwaring"><i className="fa fa-github fa-3x icon" aria-hidden="true"/></a>
                            <a href="https://www.linkedin.com/in/stephaniemanwaring"><i className="fa fa-linkedin fa-3x icon" aria-hidden="true"/></a>
                        </div>
                    </article>
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
)(Contact);

//  <i className="fa fa-envelope fa-3x icon" aria-hidden="true"/>