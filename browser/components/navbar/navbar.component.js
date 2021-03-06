import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import './navbar.scss';

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
    window.addEventListener('scroll', (evt) => {
      if (window.scrollY > 200) {
        document.querySelector('.navbar').classList.add('background');
      } else {
        document.querySelector('.navbar').classList.remove('background');
      }
    });
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
              <ScrollLink to="home" smooth={true} duration={500}><div className="menu-text pointer" onClick={this.handleMenuClick}>home</div></ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500}><div className="menu-text pointer" onClick={this.handleMenuClick}>about</div></ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500}><div className="menu-text pointer" onClick={this.handleMenuClick}>projects</div></ScrollLink>
              <ScrollLink to="presentations" smooth={true} duration={500}><div className="menu-text pointer" onClick={this.handleMenuClick}>presentations</div></ScrollLink>
              <ScrollLink to="resume" smooth={true} duration={900}><div className="menu-text pointer" onClick={this.handleMenuClick}>resume</div></ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={900}><div className="menu-text pointer" onClick={this.handleMenuClick}>contact</div></ScrollLink>
            </div>
          </div>
      );
  }
}

