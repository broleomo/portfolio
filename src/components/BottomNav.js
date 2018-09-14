import React, { Component } from 'react';
import '../styles/Nav.css';
export default class Nav extends Component {
  render() {
    return (
        <div className="bottom-nav-container">
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/brooklynnmoor/'>
            <img style={{width: "50px"}} alt="linked-in" src="white_linkedin.png"/>
        </a>
        <a target='_blank'rel="noopener noreferrer" href='https://github.com/broleomo'>
        <img style={{width: "50px"}} alt="github" src="Github-Mark-Light-64px.png"/>
        </a>
        <a href='mailto:brooklynnmoor@gmail.com'>
        <img style={{width: "50px"}} alt="email" src="email_icon.png"/>
        </a>
        </div>
    )
  }
}
