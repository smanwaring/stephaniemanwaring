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
                        <div className="dummy-logo">
                            <img src="stack-overflow.png" alt="stack-overflow" height="60" width="60"/>
                        </div>
                        <div className="dummy-logo">
                            <img src="github.png" alt="github" height="60" width="60"/>
                        </div>
                      <div className="dummy-logo">
                            <img src="linkedin.png" alt="linkedin" height="60" width="60"/>
                      </div>
                     <div className="dummy-logo">
                            <img src="envelope.png" alt="email" height="60" width="60"/>
                      </div>
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
