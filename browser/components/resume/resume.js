import React from 'react';
import { connect } from 'react-redux';


class Resume extends React.Component {
    render() {
        return (
            <div className="spacer spacer-extra">
                <h1 className="no-margin">What I've been up to</h1>
                <div className="wrapper">
                <article className="main">
                    <div className="flex-container">
                        <div>
                            <div className="link-box-resume">
                                <div className="btn-lg-text">DOWNLOAD RESUME</div>
                            </div>
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
)(Resume);
