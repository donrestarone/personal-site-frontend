import React, { Component } from 'react';
import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="navbar-title">Shashike J</h1>
        <button className="contact-button">Contact</button>
      </div>
    );
  }
}

export default NavBar;