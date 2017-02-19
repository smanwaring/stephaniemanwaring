import React from 'react';
import { connect } from 'react-redux';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Presentations from '../presentations/presentation.component';
import Resume from '../resume/resume';
import Contact from '../contact/contact.component';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="box">
                <div className="welcome">
                    <div className="header-font">WEB</div>
                    <div className="header-font">DEVELOPER</div>
                </div>
                </div>
                <About />
                <div className="parallax"></div>
                <Projects />
                <div className="parallax"></div>
                <Presentations />
                <div className="parallax"></div>
                <Resume />
                <div className="parallax"></div>
                <Contact />
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
)(Homepage);
