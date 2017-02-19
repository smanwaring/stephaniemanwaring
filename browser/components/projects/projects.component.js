import React from 'react';
import { connect } from 'react-redux';


class Projects extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="spacer">
                <div className="wrapper">       
                <aside className="aside aside-1">
                     <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </aside>
                <article className="main">
                    <div className="text-bold-black">Clap-Fetti</div>
                     <div className="main-text-project">
                         A fun single page web application inspired by Periscope's floating hearts 
                         and Facebook's reaction icons. Create a custom clap board or join one that
                         already exists to view and/or participate in silent reactions from a audience, gauge audience sentiment, or use it for a colorful 
                         visual applaud from remote users during your presentation. </div>
                        <br/>
                        <div className="main-text-project">Powered by: React-Redux, Socket.io, and my own react/redux boilerplate</div>
                        <br/>
                        <div className="link-box">GITHUB</div>
                        <div className="link-box">LIVESITE</div>
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
)(Projects);
