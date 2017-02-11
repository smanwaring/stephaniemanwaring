import React from 'react';
import { connect } from 'react-redux';


class Projects extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="projects-background">
                <h1>These are my projects</h1>
                <hr/>
          <div className="wrapper white">
                <aside className="aside aside-1">
                    <div className="text-bold">Clap-Fetti</div>
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
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
            </div>

                          <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Santa-Swap</div>
                     <div className="main-text-project">
                         A fun single page web application inspired by Periscope's floating hearts 
                         and Facebook's reaction icons. Create a custom clap board or join one that
                         already exists to view and/or participate in silent reactions from a audience, gauge audience sentiment, or use it for a colorful 
                         visual applaud from remote users during your presentation. </div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
                </div>
                          <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Archiver</div>
                     <div className="main-text-project">
                         A fun single page web application inspired by Periscope's floating hearts 
                         and Facebook's reaction icons. Create a custom clap board or join one that
                         already exists to display silent reactions from a audience, gauge audience sentiment, or use it for a colorful 
                         visual applaud from remote users during your presentation.  </div>

                       
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
                </div>

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Relationship</div>
                     <div className="main-text-project">
                         A fun single page web application inspired by Periscope's floating hearts 
                         and Facebook's reaction icons. Create a custom clap board or join one that
                         already exists to display silent reactions from a audience, gauge audience sentiment, or use it for a colorful 
                         visual applaud from remote users during your presentation. Built using my own react-redux boilerplate </div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
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
