import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import { Link } from 'react-router';



let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

    handleMenuClick(){
        this.setState( { menuOpen: !this.state.menuOpen}  );
    }

    render() {
      const menuClasses = this.state.menuOpen ? 'menu expand' : 'menu';
        return (
            <div className="navbar">
                <div className="menu-text logo"> /sm</div>
                <div className="mobile-menu"><i className="material-icons" onClick={this.handleMenuClick}>menu</i></div>
                <div className={menuClasses} onClick={this.handleMenuClick}>
                    <div className="menu-text">hello</div>
                    <ScrollLink to="test1" smooth={true} duration={500}><div className="menu-text">about</div></ScrollLink>
                    <div className="menu-text">projects</div>
                    <div className="menu-text">presentations</div>
                    <div className="menu-text">resume</div>
                    <div className="menu-text">contact</div>
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
)(Navbar);
