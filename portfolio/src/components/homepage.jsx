import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";

function Homepage(props) {
  console.log('PROPSSS: ', props)

  // let navBar = useRef(null);
  let aboutMe = useRef(null);
  let skills = useRef(null);
  let portfolio = useRef(null);
  let contactMe = useRef(null);

  useEffect(() => {
     props.timeline.to([aboutMe, skills, portfolio, contactMe], {
      y: 20,
      stagger: {
        amount: .5
      },
      ease: Power2.out,
      duration: 1,
     })
  })

  return (
    <section id="Homepage">
        <div className="NavBar">
          <a className="am-aboutme" href="#AboutMe" ref={ el => aboutMe = el}>ABOUT ME</a>
          <a className="am-techstack" href="#Skills" ref={ el => skills = el}>SKILLS</a>
          <a className="am-portfolio" href="#Portfolio" ref={ el => portfolio = el}>PORTFOLIO</a>
          <a className="am-contactme" href="#ContactMe" ref={ el => contactMe = el}>CONTACT</a>
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