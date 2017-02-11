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
                            <div className="video-text-box">
                                <div className="text-box">
                                    <div className="video-text-title">TECH TALK: THE JAVASCRIPT SEMICOLON </div>
                                    <div className="video-text-sm">A semi-deep dive into the finer points of semicolons in JavaScript.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="video-sm"></div>
                            <div className="video-text-box">
                                <div className="text-box">
                                    <div className="video-text-title">PROJECT DEMO: SILENT-SALUTATIONS</div>
                                    <div className="video-text-sm">A demonstration of a simple silent-applauding app built during a 24-hour hackathon.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="video-sm"></div>
                            <div className="video-text-box">
                                <div className="text-box">
                                    <div className="video-text-title">PROJECT DEMO: ARCHIVER </div>
                                    <div className="video-text-sm">A group presentation on a custom version control desktop application.</div>
                                </div>
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
