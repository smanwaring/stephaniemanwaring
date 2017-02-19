import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';


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
                <div className="menu-text"> /sm</div>
                <div className="mobile-menu"><i className="material-icons" onClick={this.handleMenuClick}>menu</i></div>
                <div className={menuClasses} onClick={this.handleMenuClick}>
                    <Link to={'/hello'}><div className="menu-text">hello</div></Link>
                    <Link to={'/about'}><div className="menu-text">about</div></Link>
                    <Link to={'/projects'}><div className="menu-text">projects</div></Link>
                    <Link to={'/presentations'}><div className="menu-text">presentations</div></Link>
                    <Link to={'/resume'}><div className="menu-text">resume</div></Link>
                    <Link to={'/contact'}><div className="menu-text">contact</div></Link>
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
