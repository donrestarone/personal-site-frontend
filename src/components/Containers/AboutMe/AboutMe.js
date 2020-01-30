import React from 'react';
import './AboutMe.css'
import ProfileImageDesktop from '../../../assets/profile-image-desktop.png'
const AboutMe = (props) => {
  return (
    <div className="about-me-content-wrapper animated zoomIn">
      <div className="about-me-wrapper">
        <div className="about-me-text-wrapper">
          <h1 className="about-me-heading">About me</h1>
          <p className="about-me-subheading">I am a designer, developer and dev ops engineer from Toronto </p>
        </div>
        <div className="about-me-image-wrapper">
          <img src={ProfileImageDesktop}></img>
        </div>
        <div className="about-me-extended-wrapper">
          <p className="about-me-extended-wrapper-subheading">My track record consists mainly of building MVP’s and SaaS products.</p>
          <p className="about-me-extended-wrapper-subheading">Based on the projects I have completed so far, I have done everything from research, design, coding to deployment</p>
          <p className="about-me-extended-wrapper-subheading">I love solving business problems with various web technologies &amp; enjoy writing code that matters.</p>
          <p className="about-me-extended-wrapper-subheading">When I’m not building software, you'll find me either at the gym, cooking or playing guitar.</p>
        </div>
      </div>
        <div className="about-me-social-media-wrapper">
          <a className="about-me-link" target="_blank" href="https://github.com/donrestarone">Github</a>
          <span className="about-me-link">shashikejayatunge@gmail.com</span>
          <a className="about-me-link" target="_blank" href="https://www.linkedin.com/in/shashike-jayatunge/">LinkedIn</a>
        </div>
    </div>
  )
}

export default AboutMe;