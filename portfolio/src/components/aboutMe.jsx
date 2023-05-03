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
          I am a Cleveland based Full Stack Engineer with a soft spot for
          Frontend Development and designing sites that create memorable
          user experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
      </section>
  )

}

export default AboutMe;