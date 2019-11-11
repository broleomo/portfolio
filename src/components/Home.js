import React, { Component } from 'react';
import BottomNav from "./BottomNav";
import Nav from "./Nav";
import '../styles/home.css';
export default class Input extends Component {
  render() {
    return (
        <div>
          <Nav/>
        <div style={{display: 'flex', alignItems: 'center', flexDirection:"column"}}>
        <div className="heading-container">
      <h1 className="heading">Hello, I'm Brooklynn!</h1>
      <div className="bio">   
      <img className="profile-image"src='Brooklynn-illustrated.png' alt="profile"/>  
        <p>I'm a software engineer based in Portland focused on building beautiful, well-documented, maintainable user experiences. I am energized by the collaboration of a team and am constantly learning and sharing with my peers. 
          <br/>
          <br/>
          I am also the proud mother of a black cat named Salazar who is sleeping above. Click him to see a photo.
          </p>
      </div>
      </div>
      </div>
      <div className="line"/>
      <div className="skills-container">
      <h2>SKILLS</h2>
      <ul className="skills" style={{display:'flex',flexWrap:'wrap', listStyleType: 'none' }}>
          <li>React</li>
          <li>Redux</li>
          <li>Jest/Enzyme</li>
          <li>Node.js</li>
          <li>Gatsby.js</li>
          <li>Javascript</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Sketch</li>
          <li>InVision</li>
          <li>UX/UI</li>
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
  <h3 class="title">Clothing Store</h3>
  <a target="_blank" rel="noopener noreferrer" href="https://node-react-fun.herokuapp.com/">
  <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" alt="shopping-site" src="shopping-site.png"/>
      <div class="content-details fadeIn-top">
        <h3>Mocked up a website design for a clothing store.</h3>
        <ul className="truck-overlay-text"style={{listStyleType: 'none', color: 'white'}}>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
  </div>
  </a>
</div>
</div>
<BottomNav/>
<div className="design-credit"> <a target="_blank" rel="noopener noreferrer" href="linkedin.com/in/blakewdesigns">Illustration by Blake Walker</a></div>
      </div>
    )
  }
}
