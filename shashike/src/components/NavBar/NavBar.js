import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-title" to="/">Shashike J</Link>
        <button className="contact-button">Contact</button>
      </div>
    );
  }
}

export default NavBar;