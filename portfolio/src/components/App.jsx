import React, {useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
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

function App({timeline}) {
  const [count, setCount] = useState(0);
  let navBar = useRef(null);
  // useEffect(() => {
  //   timeline.from([navBar], 1, {
  //     opacity: 0,
  //     y: "100",
  //     skewY: 10,
  //     stagger: {
  //       amount: .4
  //     }
  //   }, "-=1")
  // })

  return (
    <div className="App">
      <Homepage />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default App
