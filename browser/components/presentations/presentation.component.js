import React from 'react';
import { connect } from 'react-redux';


class Presentations extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="grey-section">
                <h1>Presentations</h1>
                <div className="wrapper">
                <article className="main">
                    <div className="flex-container">
                        <div>
                            <div className="video-sm"></div>
                            <div className="video-text">
                                <div>Tech Talk</div>
                                <div>The Javascript Semicolon</div>
                                <div>A semi-deep dive into the finer points of semicolons and the ASI in JavaScript</div>
                            </div>
                        </div>
                        <div>
                            <div className="video-sm"></div>
                            <div className="video-text">
                                <div>Project Demonstration</div>
                                <div>The Javascript Semicolon</div>
                                <div>A semi-deep dive into the finer points of semicolons and the ASI in JavaScript</div>
                            </div>
                        </div>
                        <div>
                            <div className="video-sm"></div>
                            <div className="video-text">
                                <div>Project Demonstration</div>
                                <div>The Javascript Semicolon</div>
                                <div>A semi-deep dive into the finer points of semicolons and the ASI in JavaScript</div>
                            </div>
                        </div>

                    </div>
                </article>
                </div>
                <hr/>
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
)(Presentations);
