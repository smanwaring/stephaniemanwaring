import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar.component';


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
            'human being'
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
                <h1>Hi!</h1> 
                <h1>I'm Stephanie Manwaring.</h1>  
                <h1>Fullstack web developer and</h1><h1>{this.state.currentRandomFact}</h1>
                <button onClick={this.randomFactGeneratorUp}>up</button> <button onClick={this.randomFactGeneratorDown}>down</button>

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
