import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
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
                <ScrollLink to="home" smooth={true} duration={500}><div className="menu-text logo pointer"> /sm</div></ScrollLink>
                <div className="mobile-menu"><i className="material-icons" onClick={this.handleMenuClick}>menu</i></div>
                <div className={menuClasses} onClick={this.handleMenuClick}>
                    <ScrollLink to="home" smooth={true} duration={500}><div className="menu-text pointer">home</div></ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500}><div className="menu-text pointer">about</div></ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500}><div className="menu-text pointer">projects</div></ScrollLink>
                    <ScrollLink to="presentations" smooth={true} duration={500}><div className="menu-text pointer">presentations</div></ScrollLink>
                    <ScrollLink to="resume" smooth={true} duration={900}><div className="menu-text pointer">resume</div></ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={900}><div className="menu-text pointer">contact</div></ScrollLink>
                </div>
            </div>
        );
    }
}

