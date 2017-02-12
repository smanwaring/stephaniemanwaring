import React from 'react';
import { connect } from 'react-redux';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Presentations from '../presentations/presentation.component';
import Resume from '../resume/resume';
import Contact from '../contact/contact.component';


class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            randomFactsArr: [
            'yellow-cake enthusiast',
            'Mr. Meeseeks sympathizer',
            'Arrested Development quoter',
            'former baby',
            'NYC cyclist',
            'carrot juice junkie',
            'lover of semicolons',
            'needle fearer',
            'empanada maker',
            'mystery novel reader',
            'human being',
            'tardigrade admirer'
            ],
            currentRandomFact: 'yellow-cake enthusiast'
    };
    this.randomFactGeneratorDown = this.randomFactGeneratorDown.bind(this);
    this.randomFactGeneratorUp = this.randomFactGeneratorUp.bind(this);
 }

 randomFactGeneratorDown(){
    const currentIndex = this.state.randomFactsArr.indexOf(this.state.currentRandomFact);
    let nextIndex;
    if (currentIndex === this.state.randomFactsArr.length - 1){
        nextIndex = 0;
    } else {
        nextIndex = currentIndex + 1;
    }
    this.setState({currentRandomFact: this.state.randomFactsArr[nextIndex]});
 }

  randomFactGeneratorUp(){
    const currentIndex = this.state.randomFactsArr.indexOf(this.state.currentRandomFact);
    let nextIndex;
    if (currentIndex === 0){
        nextIndex = this.state.randomFactsArr.length - 1;
    } else {
        nextIndex = currentIndex - 1;
    }
    this.setState({currentRandomFact: this.state.randomFactsArr[nextIndex]});
 }


    render() {
        return (
            <div>
                <div className="box">
                <div className="welcome">
                    <div className="md-font">Hi! I'm Stephanie Manwaring</div>
                    <div className="lg-font">WEB DEVELOPER</div>
                    <div className="sm-font"> and {this.state.currentRandomFact}</div>
                    <i className="material-icons lg-icon" onClick={this.randomFactGeneratorDown}>keyboard_arrow_left</i><i className="material-icons lg-icon" onClick={this.randomFactGeneratorUp}>keyboard_arrow_right</i>
                </div>
                </div>
                <About />
                <Projects />
                <Presentations />
                <Resume />
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