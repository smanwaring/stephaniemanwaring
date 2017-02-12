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
                    <div className="footer-white"> This site was built and designed by yours truly</div>
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
