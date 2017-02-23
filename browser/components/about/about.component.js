import React from 'react';
import { connect } from 'react-redux';


class About extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div className="spacer">
                <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Nice to meet you.</div>
                </aside>
                <article className="main">
                    <div className="inline"> I'm Stephanie Manwaring. I'm a former marketing director turned full stack web developer. 
                        I attended Fullstack Academy of Code where I currently work as a teaching fellow and engineering intern. 
                        I've worked independently and in small teams to develop sweet projects with the technologies I've learned.  
                        I currently reside in NYC and continue to be inspired by its tech community. I </div> <i className="fa fa-heart inline yellow" aria-hidden="true"/> <div className="inline">the web.
                        <br/>
                        <br/>
                        When I'm not coding you can find me cycling on the streets on NYC, running through Central Park,  
                        putting together a four-course meal, board-gaming it up with friends, or doing laundry.</div>  
                </article>
                </div>
   
                <hr />

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div className="text-bold" >Languages</div>
                </aside>
                <article className="main">
                    <ul className="dashed">
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
                    <div>Technologies</div>
                </aside>
                <article className="main">
                    <ul className="left column-flex">
                     <span className="column-2">
                      <div className="bold">Frameworks/libraries</div>
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
                    </span>
                    <span className="column-2">
                        <div className="about-top-spacer bold">Day-to-day comfort</div>
                        <li>Version Control (GIT)</li>
                        <li>Agile Methodology</li>
                    </span>
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

