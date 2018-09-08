import React, { Component } from 'react';
import '../styles/Nav.css';
// import '../BrooklynnProfile.jpg';
export default class Nav extends Component {
  render() {
    return (
        <div className="nav-container">
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/brooklynnmoor/'>LinkedIn</a>
        <a target='_blank'rel="noopener noreferrer" href='https://github.com/broleomo'>GitHub</a>
        <a href='mailto:brooklynnmoor@gmail.com'>Email</a>
      </div>
    )
  }
}
