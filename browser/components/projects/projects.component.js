import React from 'react';
import { connect } from 'react-redux';


class Projects extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div>
                <h1>These are my projects</h1>
                <hr/>
          <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Presentations</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
            </div>
                          <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Presentations</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
                </div>
                          <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Presentations</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                     <div>Used my own react redux boilerplate</div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-lg"></li>
                    </ul>
                </article>
                </div>

                <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Presentations</div>
                     <div>Nice to meet you.</div>
                     <div>Nice to meet you.</div>
                     <div>Used my own react redux boilerplate</div>
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
