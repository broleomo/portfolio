import React, { Component } from 'react';
import BottomNav from "./BottomNav"
import '../styles/home.css';
export default class Input extends Component {
  render() {
    return (
        <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection:"column"}}>
        <div className="heading-container">
      <h1 className="heading">Hello, I'm Brooklynn!</h1>
      <img className="profile-image"src='Oval-profile.png' alt="profile"/>
      </div>
      </div>
      <div className="line"/>
      <div className="skills-container">
      <h2>SKILLS</h2>
      <ul style={{display:'flex',flexWrap:'wrap', listStyleType: 'disc', listStylePosition: 'inside' }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Docker</li>
          <li>Sketch</li>
          <li>InVision</li>
          <li>Wireframing</li>
      </ul>
      </div>
      <div className="line"/>
      <h2>PROJECTS</h2>
      <div className="projects-container">
      <div class="container">
  <h3 class="title">Music Search Site</h3>
  <a target="_blank" rel="noopener noreferrer" href="https://broleomo.github.io/Music-Search/">
  <div class="content">
      <div class="content-overlay"></div>
      <img style={{width: '100%'}} class="content-image" alt="music-search" src="vibequest.png"/>
      <div class="content-details fadeIn-top">
        <h3>Simple music search app </h3>
        <ul className="truck-overlay-text"style={{listStyleType: 'none', color: 'white'}}>
          <li>Javascript</li>
          <li>iTunes API</li>
          <li>CSS</li>
        </ul>
      </div>
  </div>
  </a>
</div>

      <div class="container">
  <h3 class="title">Truck Scheduling App</h3>
  <a>
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" alt="trucking-site" src="oil-recycling.png"/>
      <div class="content-details fadeIn-top">
        <h3>Worked on a small team using:</h3>
        <ul className="truck-overlay-text"style={{listStyleType: 'none', color: 'white'}}>
          <li>React + Redux</li>
          <li>Node.js + Express</li>
          <li>MongoDB + Mongoose</li>
          <li>CircleCI</li>
        </ul>
      </div>
  </div>
  </a>
</div>

<div class="container">
  <h3 class="title">Cat Sitting App (Prototype)</h3>
  <a target="_blank" rel="noopener noreferrer" href="https://invis.io/V5NPNNL2FPM">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" alt="trucking-site" src="wireframing.png"/>
      <div class="content-details fadeIn-top">
        <h3>Designed wireframes & prototyped an app for finding and scheduling with pet sitters.</h3>
        <ul className="truck-overlay-text"style={{listStyleType: 'none', color: 'white'}}>
          <li>Sketch</li>
          <li>Invision</li>
        </ul>
      </div>
  </div>
  </a>
</div>
</div>
<BottomNav/>
      </div>
    )
  }
}
