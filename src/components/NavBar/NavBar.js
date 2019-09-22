import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-title" to="/" onClick={this.props.closeContactModal}>Shashike J</Link>
          <div className="nav-buttons-wrapper">
            <button className="nav-button" onClick={this.props.contactToggler}>Contact</button>
            <Link to="/about/me" className="nav-button" onClick={this.props.closeContactModal}>About Me</Link>
            <Link to="/blog" className="nav-button" onClick={this.props.closeContactModal}>Blog</Link>
          </div>
      </div>
    );
  }
}

export default NavBar;