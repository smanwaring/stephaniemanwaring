import React from 'react';
import { connect } from 'react-redux';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Presentations from '../presentations/presentation.component';
import Resume from '../resume/resume';
import Contact from '../contact/contact.component';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <a id="home_ref"><div className="box">
                <div className="welcome">
                    <div className="header-font">WEB</div>
                    <div className="header-font">DEVELOPER</div>
                </div>
                </div></a>
                <a id="about_ref"><About /></a>
                <div className="parallax"></div>
                <a id="projects_ref"><Projects /></a>
                <div className="parallax"></div>
                <a id="presentations_ref"><Presentations /></a>
                <div className="parallax"></div>
                <a id="resume_ref"><Resume /></a>
                <div className="parallax"></div>
                <a id="contact_ref"><Contact /></a>
                <Footer />
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
