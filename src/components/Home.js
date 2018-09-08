import React, { Component } from 'react';
import '../styles/home.css';
export default class Input extends Component {
  render() {
    return (
        <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection:"column"}}>
      <h1 className="heading">Hello, I'm Brooklynn!</h1>
      <img className="profile-image"src='BrooklynnProfile.jpg' alt="profile"/>
      </div>
      <div className="line"/>
      <h2>SKILLS</h2>
      <ul style={{display:'flex', justifyContent: 'center', listStyleType: 'none'}}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Docker</li>
          <li>Sketch</li>
          <li>InVision</li>
          <li>Zepelin</li>
          <li>Wireframing</li>
      </ul>
      <div className="line"/>
      <h2>PROJECTS</h2>

      </div>
    )
  }
}
