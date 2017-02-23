import React from 'react';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Presentations from '../presentations/presentation.component';
import Resume from '../resume/resume';
import Contact from '../contact/contact.component';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';
import Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

export default () => (
  <div>
      <Navbar />
      <Element name="home">
        <div className="wallpaper">
          <div className="info">
              <div className="header-font">WEB</div>
              <div className="header-font">DEVELOPER</div>
          </div>
        </div>
      </Element>
      <Element name="about">
        <About />
      </Element>
      <div className="parallax-projects"></div>
      <Element name="projects">
        <Projects />
      </Element>
      <div className="parallax-presentations">
      </div>
      <Element name="presentations">
        <Presentations />
      </Element>
      <div className="parallax-resume"></div>
      <Element name="resume">
        <Resume />
      </Element>
      <div className="parallax-contact"></div>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
  </div>
  );




