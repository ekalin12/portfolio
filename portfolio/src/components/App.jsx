import React, {useState, useRef, useEffect } from 'react';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Homepage from './homepage.jsx';
import AboutMe from './aboutMe.jsx';
import Skills from './skills.jsx'
import Portfolio from './portfolio.jsx';
import ContactMe from './contactMe.jsx'
import '../assets/sass/App.scss'

function App() {
  const [SVGColorOne, setSVGColorOne] = useState('hsl(219,94%,39%)')
  const [SVGColorTwo, setSVGColorTwo] = useState('hsl(219,94%,69%)');

  let tl = new gsap.timeline();
  let sections = gsap.utils.toArray(".section")

  sections.forEach((section, i) => {

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: i === sections.length -1 ? false : true,
      //end:"bottom 100",
      pinSpacing: false
    });

  });
  // let ease = Power2.easeOut;

  useEffect(() => {
    console.log('Sections: ', sections)
  })

  function assignSVGColor(color) {
    const split = color.split(',');

    const h = Number(split[0]);
    const s = Number(split[1].split('').slice(0,2).join(''));
    const l = Number(split[2].split('').slice(0,2).join(''));

    const l_One = l - 10;
    const l_Two = l + 20;

    let colorOne = `hsl(${h},${s}%,${l_One}%)`;
    let colorTwo = `hsl(${h},${s}%,${l_Two}%)`;
    console.log('Color One: ', colorOne);
    console.log('Color Two: ', colorTwo);

    setSVGColorOne(`hsl(${h},${s}%,${l_One}%)`);
    setSVGColorTwo(`hsl(${h},${s}%,${l_Two}%)`);
  }

  return (
    <div className="App">
      <Homepage timeline={tl} assignSVGColor={assignSVGColor}/>
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe SVGColorOne={SVGColorOne} SVGColorTwo={SVGColorTwo}/>
    </div>
  )
}

export default App
