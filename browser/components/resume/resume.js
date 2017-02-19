import React from 'react';
import { connect } from 'react-redux';


class Resume extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="spacer spacer-extra">
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
