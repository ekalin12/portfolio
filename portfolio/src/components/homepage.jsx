import React, {useRef, useEffect} from 'react';
import { gsap, Power2 } from "gsap";

import beigeBlackIcon from '../assets/Icons/color1.png';
import orangeGreenIcon from '../assets/Icons/color2.png';
import yellowBlueIcon from '../assets/Icons/color3.png';
import purpleIcon from '../assets/Icons/color4.png';

function Homepage(props) {

  // let navBar = useRef(null);
  let aboutMe = useRef(null);
  let skills = useRef(null);
  let portfolio = useRef(null);
  let contactMe = useRef(null);

  useEffect(() => {
    const primaryOne = getComputedStyle(document.documentElement).getPropertyValue("--app-primaryColorOne")
    //console.log('primary color one: ', primaryOne)
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
    // const root = document.documentElement;
    root.style.setProperty("--app-primaryColorOne", `hsl(${primaryColorOne})`);
    root.style.setProperty("--app-primaryColorTwo", `hsl(${primaryColorTwo})`)
    root.style.setProperty("--app-secondaryColor", `hsl(${secondaryColor})`)
    root.style.setProperty("--app-accentColor", `hsl(${accentColor})`)
    props.assignSVGColor(primaryColorOne)
    //console.log(root.style.getPropertyValue('--app-primaryColorOne'))
  }

  return (
    <section id="Homepage" className="section">
        <div className="NavBar">
          <a className="am-aboutme" href="#AboutMe" ref={ el => aboutMe = el}>ABOUT ME</a>
          <a className="am-techstack" href="#Skills" ref={ el => skills = el}>SKILLS</a>
          <a className="am-portfolio" href="#Portfolio" ref={ el => portfolio = el}>PORTFOLIO</a>
          <a className="am-contactme" href="#ContactMe" ref={ el => contactMe = el}>CONTACT</a>
          <ul style={{listStyleType: "none"}}>
            <li><a href="#" class="button">
            <span class="text">COLORS</span>
            <span class="icon">
              <img src={beigeBlackIcon} onClick={() => {changeColorScheme(`44,31%,72%`,'30,3%,29%','0,0%,0%','0,0%,100%')}}/>
              <img src={orangeGreenIcon} onClick={() => {changeColorScheme('113,28%,25%','32,98%,52%','0,0%,0%','0,0%,100%')}} />
              <img src={yellowBlueIcon} onClick={() => {changeColorScheme('57,70%,52%','222,23%,17%','0,0%,0%','0,0%,100%')}} />
              <img src={purpleIcon} onClick={() => {changeColorScheme('282,17%,69%','346,20%,34%','0,0%,0%','0,0%,100%')}} />
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