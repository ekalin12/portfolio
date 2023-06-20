import React from 'react';
import selfie from '../assets/images/eric-image.png';

function AboutMe() {
  return (
    <section id="AboutMe">
        <div className="aboutMeTop">
          <div className="aboutMeText">
            ABOUT ME
            <div className="aboutMeTextOutline"> ABOUT ME </div>
            ABOUT ME
            ABOUT ME
          </div>
          <div className="aboutMeImageContainer">
            <img src={selfie}/>
          </div>
        </div>
        <div className="aboutMeBottom">
          <span>
          I am Full Stack Engineer based in Cleveland with a passion for creating visually
          impactful websites and front-end design.
          I have extensive end-to-end experience in building websites from the ground up,
          from the initial wireframe, to the development and deployment of a site.
          I thrive in fast paced and collaberative team settings, and look forward to overcoming
          challenging new projects as I continue to grow and learn as a developer.
          </span>
        </div>
      </section>
  )

}

export default AboutMe;