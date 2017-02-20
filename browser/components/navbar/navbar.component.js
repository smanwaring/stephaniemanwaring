import React from 'react';
import { connect } from 'react-redux';


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

    handleMenuClick(){
        this.setState( { menuOpen: !this.state.menuOpen}  );
    }

    render() {
      const menuClasses = this.state.menuOpen ? 'menu expand' : 'menu';
        return (
            <div className="navbar">
                <a href="#home_ref"><div className="menu-text logo"> /sm</div></a>
                <div className="mobile-menu"><i className="material-icons" onClick={this.handleMenuClick}>menu</i></div>
                <div className={menuClasses} onClick={this.handleMenuClick}>
                    <a href="#home_ref"><div className="menu-text">hello</div></a>
                    <a href="#about_ref"><div className="menu-text">about</div></a>
                    <a href="#projects_ref"><div className="menu-text">projects</div></a>
                    <a href="#presentations_ref"><div className="menu-text">presentations</div></a>
                    <a href="#resume_ref"><div className="menu-text">resume</div></a>
                    <a href="#contact_ref"><div className="menu-text">contact</div></a>
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
