import React from 'react';
import { connect } from 'react-redux';


class Contact extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="spacer-sm">
                <h1>Let's have a chat</h1>
                <div className="wrapper">
                    <article className="main">
                        <div className="flex-container-contact">
                            <i className="fa fa-stack-overflow fa-3x icon" aria-hidden="true"/>
                            <i className="fa fa-github fa-3x icon" aria-hidden="true"/>
                            <i className="fa fa-linkedin fa-3x icon" aria-hidden="true"/>
                            <i className="fa fa-envelope fa-3x icon" aria-hidden="true"/>
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
