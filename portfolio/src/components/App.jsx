import React, {useState, useRef, useEffect } from 'react';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import beigeBlackIcon from './assets/Icons/color1.png';
// import orangeGreenIcon from './assets/Icons/color2.png';
// import yellowBlueIcon from './assets/Icons/color3.png';
// import purpleIcon from './assets/Icons/color4.png';
import Homepage from './homepage.jsx';
import AboutMe from './aboutMe.jsx';
import Skills from './skills.jsx'
import Portfolio from './portfolio.jsx';
import ContactMe from './contactMe.jsx'
import '../assets/sass/App.scss'

function App() {
  let tl = new gsap.timeline();
  let ease = Power2.easeOut;

  return (
    <div className="App">
      <Homepage timeline={tl} ease={ease} />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default App
