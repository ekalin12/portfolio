import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";

import beigeBlackIcon from '../assets/Icons/color1.png';
import orangeGreenIcon from '../assets/Icons/color2.png';
import yellowBlueIcon from '../assets/Icons/color3.png';
import purpleIcon from '../assets/Icons/color4.png';

function Homepage(props) {
  console.log('PROPSSS: ', props)

  // let navBar = useRef(null);
  let aboutMe = useRef(null);
  let skills = useRef(null);
  let portfolio = useRef(null);
  let contactMe = useRef(null);

  useEffect(() => {
    const primaryOne = getComputedStyle(document.documentElement).getPropertyValue("--app-primaryColorOne")
    console.log('primary color one: ', primaryOne)
  }, [])

  useEffect(() => {
     props.timeline.to([aboutMe, skills, portfolio, contactMe], {
      y: 20,
      stagger: {
        amount: .5
      },
      ease: Power2.out,
      duration: 1,
     })
  });

  function changeColorScheme(primaryColorOne, primaryColorTwo, secondaryColor, accentColor) {

    // console.log('inputs: ', primaryColorOne, primaryColorTwo, secondaryColor, accentColor);
    // console.log('style: ', document.documentElement)
    // const root = document.documentElement;
    root.style.setProperty("--app-primaryColorOne", primaryColorOne);
    root.style.setProperty("--app-primaryColorTwo", primaryColorTwo)
    root.style.setProperty("--app-secondaryColor", secondaryColor)
    root.style.setProperty("--app-accentColor", accentColor)
    console.log(root.style.getPropertyValue('--app-primaryColorTwo'))
  }

  return (
    <section id="Homepage">
        <div className="NavBar">
          <a className="am-aboutme" href="#AboutMe" ref={ el => aboutMe = el}>ABOUT ME</a>
          <a className="am-techstack" href="#Skills" ref={ el => skills = el}>SKILLS</a>
          <a className="am-portfolio" href="#Portfolio" ref={ el => portfolio = el}>PORTFOLIO</a>
          <a className="am-contactme" href="#ContactMe" ref={ el => contactMe = el}>CONTACT</a>
          <ul style={{listStyleType: "none"}}>
            <li><a href="#" class="button">
            <span class="icon">+</span>
            <span class="text">
              <img src={beigeBlackIcon} onClick={() => {changeColorScheme('#E3DDCB', '#4B4947', '#000000', '#FFFFFF')}}/>
              <img src={orangeGreenIcon} onClick={() => {changeColorScheme('#33532F', '#FC8E0E', '#000000', '#FFFFFF')}} />
              <img src={yellowBlueIcon} onClick={() => {changeColorScheme('#D2C904', '#222836', '#000000', '#FFFFFF')}} />
              <img src={purpleIcon} onClick={() => {changeColorScheme('#B6A3BE', '#67444C', '#000000', '#FFFFFF')}} />
            </span>
          </a></li>
          </ul>
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