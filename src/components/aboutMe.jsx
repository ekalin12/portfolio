import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";
// import SplitType from 'split-type'
// import selfie from '../assets/images/eric-image.png';

function AboutMe() {

  const aboutMeText = new SplitType('span.am-text', {types: 'chars'});
  const chars = aboutMeText.chars;

  // useEffect(() => {
  //   //MIGRATE THIS BLOCK OF CODE LATER
  //   gsap.fromTo(
  //     chars,
  //     {
  //       y: 100,
  //       opacity: 0
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.05,
  //       duration: 2,
  //       ease: 'power4.out',
  //     }
  //   )

  // })

  // return (
  //   // <section id="AboutMe" className="section">
  //   //     <div className="aboutMeTop">
  //   //       <div className="aboutMeText">
  //   //         ABOUT ME
  //   //         <div className="aboutMeTextOutline"> ABOUT ME </div>
  //   //         ABOUT ME
  //   //         ABOUT ME
  //   //       </div>
  //   //       <div className="aboutMeImageContainer">
  //   //         <img src={selfie}/>
  //   //       </div>
  //   //     </div>
  //   //     <div className="aboutMeBottom">
  //   //       <span className="am-text">
  //   //       I am Full Stack Engineer based in Cleveland with a passion for creating visually
  //   //       impactful websites and front-end design.{<br></br>}
  //   //       I have extensive end-to-end experience in building websites from the ground up,
  //   //       from the initial wireframe, to the development and deployment of a site.
  //   //       I thrive in fast paced and collaberative team settings, and look forward to overcoming
  //   //       challenging new projects as I continue to grow and learn as a developer.
  //   //       </span>
  //   //     </div>
  //   //   </section>
  // )

}

export default AboutMe;