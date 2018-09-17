import React, { Component } from 'react';
import '../styles/Nav.css';
// import '../BrooklynnProfile.jpg';
export default class Nav extends Component {
  render() {
    return (
        <div className="nav-container">
          <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/brooklynnmoor/'>
            <img className="social-icons" style={{width: "40px"}} alt="linked-in" src="white_linkedin.png"/>
        </a>
        <a target='_blank'rel="noopener noreferrer" href='https://github.com/broleomo'>
        <img className="social-icons" style={{width: "40px"}} alt="github" src="github-cat.png"/>
        </a>
        <a href='mailto:brooklynnmoor@gmail.com'>
        <img className="social-icons" style={{width: "40px"}} alt="email" src="email_icon.png"/>
        </a>
      </div>
    )
  }
}
