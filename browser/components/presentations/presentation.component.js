import React from 'react';
import { connect } from 'react-redux';


class Presentations extends React.Component {
    constructor(props){
        super(props);
    };


    render() {
        return (
            <div>
                <div className="wrapper">
                <aside className="aside aside-1">
                    <div>Presentations</div>
                </aside>
                <article className="main">
                    <ul className="flex-container">
                        <li className="video-sm"></li>
                        <li className="video-sm"></li>
                        <li className="video-sm"></li>
                    </ul>
                </article>
                </div>
                <hr/>
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
)(Presentations);
