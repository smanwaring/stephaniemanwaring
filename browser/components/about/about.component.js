import React from 'react';
import { connect } from 'react-redux';


class About extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div>
                <div className="wrapper">
                <aside className="aside aside-1">
                    <div className="text-highlight">Hello!</div>
                    <div className="text-bold">Nice to meet you.</div>
                </aside>
                <article className="main">
                    <p className="main-text"> I'm Stephanie Manwaring (	man - weh - ring ). I'm a former marketing director turned full stack web developer. 
                        I attended Fullstack Academy of Code where I currently work as a teaching fellow and engineering intern. 
                        I've worked independently and in small teams to develop sweet projects with the technologies I've learned.  
                        I currently reside in NYC and continue to be inspired by its tech community. 
                        <br/>
                        <br/>
                        When I'm not coding you can find me cycling on the streets on NYC, running through Central Park,  
                        putting together a four-course meal, board-gaming it up with friends, or doing laundry. 
                        I the web.</p>  
                </article>
                </div>
   
                <hr />

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div className="text-bold" >Languages</div>
                </aside>
                <article className="main">
                    <ul className="main-text">
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SASS/LESS</li>
                    </ul>
                </article>
                </div>

                <hr />

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div className="text-bold">Technologies</div>
                </aside>
                <article className="main">
                    <ul className="left main-text">
                        <div className="text-bold">Frameworks/libraries</div>
                        <li>React</li>
                        <li>React-Redux</li>
                        <li>Angular 2</li>
                        <li>Node.js</li>
                        <li>jQuery</li>
                        <li>Express</li>
                        <li>Mocha / Chai</li>
                        <li>AJAX</li>
                        <li>PostgresSQL</li>
                        <li>Sequelize</li>
                        <div className="text-bold">Day-to-day comfort</div>
                            <li>Version Control (GIT)</li>
                            <li>Agile Methodology</li>
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
)(About);

