import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-home">
          <Link className="navbar-title" to="/" onClick={this.props.closeContactModal}>Shashike J</Link>
        </div>
          <div className="nav-buttons-wrapper">
            <Link to="/about/me" className="nav-button" onClick={this.props.closeContactModal}>About</Link>
            <Link to="/projects" className="nav-button" onClick={this.props.closeContactModal}>App Showcase</Link>
            <Link to="/contact" className="nav-button" onClick={this.props.closeContactModal}>Contact</Link>
          </div>
      </div>
    );
  }
}

export default NavBar;