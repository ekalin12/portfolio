import React, {useState, useRef, useEffect } from 'react';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Homepage from './homepage.jsx';
import AboutMe from './aboutMe.jsx';
import Skills from './skills.jsx'
import Portfolio from './portfolio.jsx';
import ContactMe from './contactMe.jsx'
import '../assets/sass/App.scss'

function App() {
  let tl = new gsap.timeline();
  let ease = Power2.easeOut;
  const [SVGColorOne, setSVGColorOne] = useState('hsl(219,94%,39%)')
  const [SVGColorTwo, setSVGColorTwo] = useState('hsl(219,94%,69%)');

  useEffect(() => {
    //console.log('SVGColor CHANGE: ', SVGColorOne)
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
      <Homepage timeline={tl} ease={ease} assignSVGColor={assignSVGColor}/>
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe SVGColorOne={SVGColorOne} SVGColorTwo={SVGColorTwo}/>
    </div>
  )
}

export default App
