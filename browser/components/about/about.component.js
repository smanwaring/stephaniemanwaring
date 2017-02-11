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
                    <div>Hello!</div>
                    <div>Nice to meet you.</div>
                </aside>
                <article className="main">
                    <p>Web development is my passion. I've had over five years' experience working as a front-end web developer. I've worked in small studios developing sites for clients and at large companies working in-house on web projects. I believe in writing hand-crafted, semantic markup that is performant, uses progressive enhancement and is accessible to as many users and devices as possible. I the web.</p>  
                </article>
                </div>
   
                <hr />

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Languages</div>
                </aside>
                <article className="main">
                    <ul className="left">
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>SASS</li>
                    </ul>
                </article>
                </div>

                <hr />

                 <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Technologies</div>
                    <div>Frameworks/libraries</div>
                    <div>Party in the front, party in the back</div>
                </aside>
                <article className="main">
                    <ul className="left">
                        <li>React</li>
                        <li>React-Redux</li>
                        <li>Angular 2</li>
                        <li>Node.js</li>
                        <li>jQuery</li>
                        <li>express</li>
                        <li>moach chai</li>
                        <li>PostgresSQL</li>
                        <li>Sequelize</li>
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

