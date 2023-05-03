import React from 'react';

function Homepage() {
  return (
    <section id="Homepage">
        <div className="NavBar">
          <a className="a-aboutme"href="#AboutMe">ABOUT ME</a>
          <a className="a-techstack" href="#TechStack">SKILLS</a>
          <a className="a-portfolio" href="#Portfolio">PORTFOLIO</a>
          <a className="a-contactme" href="#ContactMe">CONTACT</a>

        </div>
        <h1>Eric Kalin</h1>
        <div className="marquee">
          <div className="marqueeTrack">
            <div className="marqueeContent">
            •FULLSTACK ENGINEER•FULLSTACK ENGINEER•FULLSTACK ENGINEER•FULLSTACK ENGINNER
            </div>
          </div>
        </div>
      </section>
  )

}

export default Homepage;