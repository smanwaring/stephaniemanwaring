import React from 'react';
import { connect } from 'react-redux';


class Footer extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="footer">
                <div className="wrapper">
                <article className="main">
                    <div className="footer-white">&#169; 2017 Stephanie Manwaring</div>
                    <div className="footer-white inline"> This site was built and designed with </div> <i className="fa fa-heart inline icon-white" aria-hidden="true"/> <div className="footer-white inline">by yours truly</div>
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
)(Footer);
