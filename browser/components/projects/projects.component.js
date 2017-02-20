import React from 'react';
import { connect } from 'react-redux';

class Projects extends React.Component {
    render() {
        return (
            <div className="spacer">
                <div className="wrapper">      
                    <aside className="aside aside-1">
                        <ul className="flex-container">
                            <li className="video-lg-1"></li>
                        </ul>
                    </aside>
                    <article className="main">
                        <div className="project-head">Silent-Salutations</div>
                        <div className="main-text-project">
                            A fun single page web application inspired by Periscope's floating hearts 
                            and Facebook's reaction icons. Create a custom clap board or join one that
                            already exists to view and/or participate in silent reactions from a audience, gauge audience sentiment, or use it for a colorful 
                            visual applaud from remote users during your presentation. </div>
                            <br/>
                            <div className="main-text-project">Powered by: React, Redux, Socket.io, HTML5/CSS3 and my own React-Redux boilerplate</div>
                            <br/>
                        <div className="link-box">GITHUB</div>
                        <div className="link-box">LIVESITE</div>
                    </article>
                </div>

                <div className="wrapper">      
                    <aside className="aside aside-1">
                        <ul className="flex-container">
                            <li className="video-lg-2"></li>
                        </ul>
                    </aside>
                    <article className="main">
                        <div className="project-head">Archiver</div>
                        <div className="main-text-project">
                            A custom version-control desktop application for text documents. Users can create teams of collaborators for specific documents and any collaborator can push up changes for others to view or download to their computer. Archiver let's users have a complete version history of all changes too. Archiver doesn't use any external APIs or git commands. Instead, we built custom version control commands to create a unique user experience that doesn't involve having to learn the command line or having to interface with Github.
                        </div>
                            <br/>
                            <div className="main-text-project">Powered by: React-Redux and Electron.js, HTML5/CSS3</div>
                            <br/>
                        <div className="link-box">GITHUB</div>
                        <div className="link-box">DEMO</div>
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
