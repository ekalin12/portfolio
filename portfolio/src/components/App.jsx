/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BsArrowUpRight } from 'react-icons/bs';
import beigeBlackIcon from '../assets/Icons/color1.png';
import orangeGreenIcon from '../assets/Icons/color2.png';
import yellowBlueIcon from '../assets/Icons/color3.png';
import purpleIcon from '../assets/Icons/color4.png';
import selfie from '../assets/images/eric-image.png';
import MrPort3000 from '../assets/images/Mr.Port3000.png';
import ApiExtension from '../assets/images/ApiExtension.png';
import FindYourSpace from '../assets/images/FindYourSpace.png';
import UnderConstruction from '../assets/images/under-construction.png';

import '../assets/sass/App.scss';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [SVGColorOne, setSVGColorOne] = useState('hsl(219,94%,39%)')
  const [SVGColorTwo, setSVGColorTwo] = useState('hsl(219,94%,69%)');

  let aboutMe = useRef(null);
  let skills = useRef(null);
  let portfolio = useRef(null);
  let contactMe = useRef(null);

  const aboutMeText = new SplitType('span.am-text', { types: 'chars' });
  const chars = aboutMeText.chars;

  // eslint-disable-next-line new-cap
  const tl = new gsap.timeline();
  const sections = gsap.utils.toArray(".section")

  // sections.forEach((section, i) => {

  //   ScrollTrigger.create({
  //     trigger: section,
  //     start: "top top",
  //     pin: i === sections.length -1 ? false : true,
  //     //end:"bottom 100",
  //     pinSpacing: false
  //   });

  // });
  // let ease = Power2.easeOut;

  // useEffect(() => {
  //   console.log('Sections: ', sections)
  // })

  // useEffect(() => {
  //   //const primaryOne = getComputedStyle(document.documentElement).getPropertyValue("--app-primaryColorOne")
  //   //console.log('primary color one: ', primaryOne)
  // }, [])

  useEffect(() => {
    tl.to([aboutMe, skills, portfolio, contactMe], {
      y: 20,
      stagger: {
        amount: 0.5,
      },
      ease: Power2.out,
      duration: 1,
    });
  });

  function assignSVGColor(color) {
    const split = color.split(',');

    const h = Number(split[0]);
    const s = Number(split[1].split('').slice(0,2).join(''));
    const l = Number(split[2].split('').slice(0,2).join(''));

    const l_One = l - 10;
    const l_Two = l + 20;

    // const colorOne = `hsl(${h},${s}%,${l_One}%)`;
    // const colorTwo = `hsl(${h},${s}%,${l_Two}%)`;

    setSVGColorOne(`hsl(${h},${s}%,${l_One}%)`);
    setSVGColorTwo(`hsl(${h},${s}%,${l_Two}%)`);
  }

  function changeColorScheme(primaryColorOne, primaryColorTwo, secondaryColor, accentColor) {
    // const root = document.documentElement;
    // eslint-disable-next-line no-undef
    root.style.setProperty('--app-primaryColorOne', `hsl(${primaryColorOne})`);
    // eslint-disable-next-line no-undef
    root.style.setProperty('--app-primaryColorTwo', `hsl(${primaryColorTwo})`);
    // eslint-disable-next-line no-undef
    root.style.setProperty('--app-secondaryColor', `hsl(${secondaryColor})`);
    // eslint-disable-next-line no-undef
    root.style.setProperty('--app-accentColor', `hsl(${accentColor})`);
    assignSVGColor(primaryColorOne);
    // console.log(root.style.getPropertyValue('--app-primaryColorOne'))
  }

  return (
    <div className="App">

      <section id="Homepage" className="section">
        <div className="NavBar">
          <a className="am-aboutme" href="#AboutMe" ref={el => aboutMe = el}>ABOUT ME</a>
          <a className="am-techstack" href="#Skills" ref={el => skills = el}>SKILLS</a>
          <a className="am-portfolio" href="#Portfolio" ref={el => portfolio = el}>PORTFOLIO</a>
          <a className="am-contactme" href="#ContactMe" ref={el => contactMe = el}>CONTACT</a>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <a className='button'>
                <span className="text">COLORS</span>
                <span className="icon">
                  <img src={beigeBlackIcon} alt="beige and black icon" onClick={() => { changeColorScheme('44,31%,72%', '30,3%,29%', '0,0%,0%', '0,0%,100%'); }} />
                  <img src={orangeGreenIcon} alt="orange and green icon" onClick={() => { changeColorScheme('113,28%,25%', '32,98%,52%', '0,0%,0%', '0,0%,100%'); }} />
                  <img src={yellowBlueIcon} alt="yellow and blue icon" onClick={() => { changeColorScheme('57,70%,52%', '222,23%,17%', '0,0%,0%', '0,0%,100%'); }} />
                  <img src={purpleIcon} alt="purple icon" onClick={() => { changeColorScheme('282,17%,69%', '346,20%,34%', '0,0%,0%', '0,0%,100%'); }} />
                </span>
              </a>
            </li>
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

      <section id="AboutMe" className="section">
        <div className="aboutMeTop">
          <div className="aboutMeText">
            ABOUT ME
            <div className="aboutMeTextOutline"> ABOUT ME </div>
            ABOUT ME
            ABOUT ME
          </div>
          <div className="aboutMeImageContainer">
            <img alt="self portrait" src={selfie} />
          </div>
        </div>
        <div className="aboutMeBottom">
          <span className="am-text">
            I am Full Stack Engineer based in Cleveland with a passion for creating visually
            impactful websites and front-end design.
            <br />
            I have extensive end-to-end experience in building websites from the ground up,
            from the initial wireframe, to the development and deployment of a site.
            I thrive in fast paced and collaberative team settings, and look forward to overcoming
            challenging new projects as I continue to grow and learn as a developer.
          </span>
        </div>
      </section>

      <section id="Skills" className="section">
        <div className="skillsText">
          TECHNICAL
          <div className="skillsTextOutline">
            SKILLS.
          </div>
        </div>
        <div className="blobContainer">
          <div className="svg blob1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" transform="translate(100 100)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M43.7,-76.4C55.2,-69.2,62,-54.4,66.8,-40.4C71.6,-26.5,74.4,-13.2,
                  76,0.9C77.6,15.1,78,30.2,71.7,41.6C65.5,53,52.5,60.8,39.5,65.9C26.4,71,13.2,
                  73.4,0.8,72.1C-11.6,70.7,-23.2,65.4,-32,57.9C-40.7,50.3,-46.7,40.3,-54.2,
                  30.3C-61.8,20.3,-71,10.1,-72.8,-1C-74.6,-12.2,-69.1,-24.5,-61.3,-34.1C-53.5,
                  -43.7,-43.4,-50.7,-32.8,-58.5C-22.2,-66.2,-11.1,-74.7,2.5,-79.1C16.1,-83.4,32.3,-83.7,43.7,-76.4Z;

                  M29.1,-51.2C39.6,-44.4,51.3,-40.4,57.9,-32.3C64.5,-24.2,66,-12.1,64.1,-1.1C62.2,
                  10,57,19.9,52.3,31.2C47.5,42.5,43.4,55.2,34.8,64.3C26.1,73.4,13.1,78.8,-1.6,81.6C-16.3,
                  84.3,-32.5,84.4,-43.5,76.7C-54.6,69.1,-60.4,53.6,-63.1,39.5C-65.8,25.5,-65.5,12.7,-62.5,
                  1.7C-59.5,-9.2,-53.7,-18.5,-50.3,-31.4C-46.9,-44.3,-45.8,-60.9,-37.8,-69.2C-29.8,-77.5,
                  -14.9,-77.6,-2.8,-72.7C9.3,-67.8,18.6,-58.1,29.1,-51.2Z;

                  M28.4,-51.1C37.8,-43.9,47,-38.2,56.5,-29.9C66.1,-21.7,75.9,-10.8,76.7,0.5C77.5,11.8,69.4,23.6,
                  61.2,34.1C53,44.7,44.8,54,34.6,63C24.4,72,12.2,80.6,-0.5,81.5C-13.2,82.4,-26.5,75.6,-37.4,67C-48.3,
                  58.4,-56.9,48.1,-59.6,36.7C-62.3,25.2,-59.2,12.6,-62.1,-1.7C-65,-15.9,-73.9,-31.9,-69.6,-40.6C-65.3,
                  -49.4,-47.9,-51,-34.1,-55.7C-20.3,-60.5,-10.1,-68.3,-0.3,-67.8C9.5,-67.3,19.1,-58.4,28.4,-51.1Z;

                  M33.6,-60.6C43,-52.8,49.7,-42.7,59,-32.2C68.4,-21.7,80.3,-10.9,78.4,-1.1C76.4,8.6,60.7,17.3,53.3,
                  31.1C45.9,44.9,46.8,63.8,39.4,72.3C31.9,80.7,15.9,78.6,2.1,75.1C-11.8,71.5,-23.7,66.5,-33.8,59.6C-43.9,
                  52.6,-52.2,43.8,-60.3,33.6C-68.4,23.3,-76.1,11.7,-76.4,-0.1C-76.6,-11.9,-69.4,-23.9,-60.4,-32.6C-51.5,
                  -41.4,-40.9,-46.9,-30.5,-54.2C-20.2,-61.5,-10.1,-70.5,1,-72.3C12.1,-74,24.2,-68.4,33.6,-60.6Z;

                  M41,-67.4C53.8,-63.7,65.1,-53.9,72.6,-41.6C80.2,-29.4,84.1,-14.7,80.5,-2.1C76.9,10.5,65.8,21,57.7,
                  32.5C49.7,44,44.8,56.5,35.6,62.2C26.5,67.9,13.3,66.9,1.1,64.9C-11,63,-22.1,60.2,-30.8,54.3C-39.6,48.4,
                  -46.2,39.4,-55.1,29.8C-64,20.3,-75.3,10.1,-74.8,0.3C-74.3,-9.6,-62.1,-19.2,-52.9,-28.3C-43.7,-37.4,-37.6,
                  -45.9,-29.3,-52.2C-21,-58.4,-10.5,-62.3,1.8,-65.5C14.2,-68.7,28.3,-71.1,41,-67.4Z;

                  M43.7,-76.4C55.2,-69.2,62,-54.4,66.8,-40.4C71.6,-26.5,74.4,-13.2,
                  76,0.9C77.6,15.1,78,30.2,71.7,41.6C65.5,53,52.5,60.8,39.5,65.9C26.4,71,13.2,
                  73.4,0.8,72.1C-11.6,70.7,-23.2,65.4,-32,57.9C-40.7,50.3,-46.7,40.3,-54.2,
                  30.3C-61.8,20.3,-71,10.1,-72.8,-1C-74.6,-12.2,-69.1,-24.5,-61.3,-34.1C-53.5,
                  -43.7,-43.4,-50.7,-32.8,-58.5C-22.2,-66.2,-11.1,-74.7,2.5,-79.1C16.1,-83.4,32.3,-83.7,43.7,-76.4Z;
                  "
                />
              </path>
              <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle" fontSize="1em">Frontend</text>
              <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Javascript</text>
              <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">React</text>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Next.js</text>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">SaSS</text>
            </svg>
          </div>
          <div className="svg blob2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" transform="translate(100 100)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="
            M31.9,-55.7C45.7,-47.2,64.2,-47.5,75.4,-39.7C86.6,-31.8,90.6,-15.9,85.3,-3.1C80,9.8,65.5,19.6,56.9,32C48.3,
            44.5,45.7,59.5,37.2,63C28.7,66.5,14.3,58.4,2.4,54.3C-9.6,50.2,-19.2,50.1,-27.2,46.3C-35.3,42.5,-41.8,35.2,
            -51.4,26.9C-61,18.6,-73.8,9.3,-76.1,-1.3C-78.3,-11.9,-70,-23.8,-63.6,-37.6C-57.1,-51.4,-52.5,-67.2,-42.2,
            -77.6C-31.9,-88.1,-16,-93.2,-3.5,-87.2C9,-81.2,18.1,-64.1,31.9,-55.7Z;

            M39.7,-72.6C50.2,-62.8,56.5,-49.5,61.9,-36.9C67.2,-24.2,71.6,-12.1,69.2,-1.3C66.9,9.4,57.9,18.8,50.9,
            28.6C43.8,38.3,38.8,48.4,30.7,50.7C22.5,53,11.3,47.5,-0.1,47.7C-11.4,47.8,-22.9,53.6,-30.1,50.8C-37.4,
            48,-40.6,36.6,-45.1,26.7C-49.7,16.8,-55.7,8.4,-62.2,-3.8C-68.8,-15.9,-75.8,-31.9,-73.4,-45.6C-71.1,-59.3,
            -59.3,-70.9,-45.5,-78.8C-31.7,-86.8,-15.9,-91.2,-0.6,-90.2C14.6,-89.1,29.2,-82.5,39.7,-72.6Z;

            M24.5,-44.2C36.1,-35.7,52.9,-38,65.1,-32.4C77.3,-26.8,84.8,-13.4,81.4,-2C77.9,9.5,63.6,18.9,56.2,32.9C48.9,
            46.8,48.6,65.2,40.4,75.3C32.2,85.4,16.1,87.1,0.5,86.3C-15.1,85.5,-30.3,82.1,-44.1,75.3C-58,68.5,-70.5,58.2,
            -72.6,45.1C-74.7,32,-66.4,16,-61,3.1C-55.6,-9.8,-53.2,-19.5,-47.2,-25.9C-41.2,-32.3,-31.7,-35.4,
            -23.3,-45.7C-14.8,-56,-7.4,-73.6,-0.5,-72.8C6.4,-72,12.9,-52.7,24.5,-44.2Z;

            M25.8,-49.4C33,-40.6,38.2,-32.8,41.5,-24.7C44.7,-16.7,46.2,-8.3,52,3.4C57.8,15,68,30.1,67.3,42.7C66.7,55.3,
            55.1,65.4,42.1,72.3C29.1,79.2,14.5,83,1.1,81.1C-12.3,79.1,-24.6,71.5,-36.7,64.1C-48.9,56.6,-60.9,49.4,-62.5,
            38.7C-64.2,28,-55.5,14,-51.2,2.5C-46.8,-8.9,-46.6,-17.9,-46.3,-30.8C-45.9,-43.7,-45.3,-60.6,-37.6,-69.1C-29.8,
            -77.7,-14.9,-77.9,-2.8,-73.1C9.3,-68.2,18.6,-58.3,25.8,-49.4Z;

            M35.7,-59.5C45.7,-56,52.8,-45.3,53.8,-34.2C54.7,-23.1,49.3,-11.6,50.2,0.5C51,12.6,58.1,25.1,54.3,31.1C50.4,37.1,
            35.6,36.5,24.7,44.9C13.8,53.2,6.9,70.6,-1.5,73.1C-9.9,75.7,-19.7,63.5,-25.4,52.1C-31,40.7,-32.4,30.1,-43.4,
            21.6C-54.5,13,-75.1,6.5,-75.2,0C-75.3,-6.6,-54.8,-13.2,-43.5,-21.4C-32.3,-29.5,-30.3,-39.2,-24.6,-45.2C-18.8,-51.1,
            -9.4,-53.3,1.7,-56.3C12.8,-59.2,25.7,-63,35.7,-59.5Z;

            M31.9,-55.7C45.7,-47.2,64.2,-47.5,75.4,-39.7C86.6,-31.8,90.6,-15.9,85.3,-3.1C80,9.8,65.5,19.6,56.9,32C48.3,
            44.5,45.7,59.5,37.2,63C28.7,66.5,14.3,58.4,2.4,54.3C-9.6,50.2,-19.2,50.1,-27.2,46.3C-35.3,42.5,-41.8,35.2,
            -51.4,26.9C-61,18.6,-73.8,9.3,-76.1,-1.3C-78.3,-11.9,-70,-23.8,-63.6,-37.6C-57.1,-51.4,-52.5,-67.2,-42.2,
            -77.6C-31.9,-88.1,-16,-93.2,-3.5,-87.2C9,-81.2,18.1,-64.1,31.9,-55.7Z;
            "
                />
              </path>
              <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle">Backend</text>
              <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Node.js</text>
              <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Express</text>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">PostgreSQL</text>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">MySQL</text>
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">MongoDB</text>
              <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">NGINX</text>
            </svg>
          </div>
          <div className="svg blob3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" transform="translate(100 100)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="
                  M24,-39.5C35.4,-34.9,52,-37.3,63.5,-31.8C75,-26.4,81.4,-13.2,83.5,1.2C85.7,15.7,83.6,31.4,72.8,37.9C61.9,
                  44.5,42.3,41.9,28.7,47.4C15.1,52.9,7.6,66.4,-1.3,68.7C-10.2,71,-20.4,62.1,-33.8,56.4C-47.1,50.8,-63.6,48.5,
                  -70,39.7C-76.4,30.8,-72.7,15.4,-67.8,2.8C-63,-9.9,-57.1,-19.7,-49.6,-26.7C-42.2,-33.6,-33.1,-37.7,-24.6,
                  -43.9C-16.1,-50.1,-8,-58.4,-0.9,-56.9C6.3,-55.4,12.6,-44,24,-39.5Z;

                  M39.8,-64.7C53.4,-61,67.6,-54.1,75.5,-42.8C83.3,-31.5,84.9,-15.7,81.1,-2.2C77.4,11.4,68.3,22.8,58.1,30.2C48,
                  37.5,36.8,40.9,26.9,47.1C17.1,53.3,8.5,62.3,-2.7,67C-14,71.8,-28,72.3,-41.7,68.3C-55.3,64.3,-68.6,55.8,-72.6,
                  43.6C-76.7,31.5,-71.6,15.7,-63.7,4.5C-55.9,-6.7,-45.2,-13.3,-40.4,-24.2C-35.6,-35.1,-36.7,-50.2,-30.9,
                  -58.4C-25.2,-66.6,-12.6,-67.8,0.2,-68.2C13.1,-68.6,26.2,-68.3,39.8,-64.7Z;

                  M41.4,-70.1C55,-63.9,68.2,-55.4,72.5,-43.4C76.9,-31.3,72.4,-15.7,68.5,-2.3C64.5,11.1,61.1,22.2,56.4,33.7C51.7,
                  45.1,45.7,56.9,36.1,63.8C26.5,70.6,13.2,72.5,-0.4,73.2C-14,73.8,-28,73.2,-41.1,68.4C-54.3,63.6,-66.7,54.6,-75.4,
                  42.5C-84.1,30.4,-89.2,15.2,-90.3,-0.6C-91.4,-16.5,-88.5,-33,-77.4,-41C-66.3,-49,-47,-48.5,-32.7,-54.4C-18.5,-60.3,
                  -9.2,-72.5,2.3,-76.5C13.9,-80.6,27.8,-76.4,41.4,-70.1Z;

                  M40.8,-65.3C54.9,-62.6,69.7,-55.7,76,-44.1C82.2,-32.5,80,-16.3,79.3,-0.4C78.7,15.5,79.7,31.1,71.2,38.6C62.6,46.2,44.4,
                  45.8,30.9,53.7C17.4,61.6,8.7,77.9,-1.6,80.7C-11.9,83.4,-23.8,72.6,-34.4,63C-45,53.5,-54.3,45.1,-60.7,34.8C-67.2,24.5,
                  -70.7,12.2,-73,-1.3C-75.3,-14.9,-76.4,-29.8,-69.5,-39.4C-62.7,-49,-48,-53.3,-35.1,-56.7C-22.2,-60.1,-11.1,-62.6,1.1,
                  -64.6C13.4,-66.6,26.8,-68,40.8,-65.3Z;

                  M32.5,-55.2C44.6,-49.3,58.8,-45.7,64.6,-36.9C70.4,-28.1,67.9,-14,69.1,0.7C70.3,15.4,75.2,30.8,70.8,42C66.3,53.2,52.5,
                  60.2,39.2,60.8C25.8,61.5,12.9,55.8,3.3,50.1C-6.3,44.4,-12.6,38.6,-25,37.4C-37.3,36.1,-55.7,39.4,-66.2,34C-76.7,28.5,
                  -79.3,14.2,-77.8,0.9C-76.3,-12.5,-70.7,-25.1,-61.3,-32.4C-51.8,-39.7,-38.6,-41.8,-27.7,-48.5C-16.9,-55.2,-8.4,-66.6,0.9,
                  -68.1C10.2,-69.6,20.3,-61.2,32.5,-55.2Z;

                  M24,-39.5C35.4,-34.9,52,-37.3,63.5,-31.8C75,-26.4,81.4,-13.2,83.5,1.2C85.7,15.7,83.6,31.4,72.8,37.9C61.9,
                  44.5,42.3,41.9,28.7,47.4C15.1,52.9,7.6,66.4,-1.3,68.7C-10.2,71,-20.4,62.1,-33.8,56.4C-47.1,50.8,-63.6,48.5,
                  -70,39.7C-76.4,30.8,-72.7,15.4,-67.8,2.8C-63,-9.9,-57.1,-19.7,-49.6,-26.7C-42.2,-33.6,-33.1,-37.7,-24.6,
                  -43.9C-16.1,-50.1,-8,-58.4,-0.9,-56.9C6.3,-55.4,12.6,-44,24,-39.5Z;
                  "
                />
              </path>
              <text x="50%" y="30%" dominantBaseline="middle" textAnchor="middle" fontSize="1em">Development</text>
              <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">AWS:EC2</text>
              <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Loader.io</text>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">K6</text>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Jest</text>
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Mocha/Chai</text>
              <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Git</text>
              <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fontSize=".5em">Vim</text>
            </svg>
          </div>
        </div>
      </section>

      <section id="Portfolio" className="section">

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={MrPort3000} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Mr.Port 3000</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={ApiExtension} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">API Extension</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={FindYourSpace} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Find Your Space</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={UnderConstruction} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Work in progress...</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay" />
              <div class="card-image">
                <img src={UnderConstruction} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Work in progress...</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                <img src={UnderConstruction} alt="" class="card-img" />
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Work in progress...</h2>
              <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="ContactMe" className="section">

        <div className="CMOverlay">
          <div className="CMTitle-Links">
          <div className="CMTitle">CONTACT ME.</div>
            <div className="CMLinks">
              <a>Linkedin.</a>
              <a>Github.</a>
              <a>Resume.</a>
            </div>
          </div>
          <div className="CMFormContainer">
            <div className="CMFormTextfield">
              <form>
                <div className="CMNameEmail">
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                  <label>
                    Email:
                    <input type="text" name="email" />
                  </label>
                </div>
                <div className="CMMessage">
                  <label>
                    Message:
                    <textarea name="message" rows={5} wrap="hard"/>
                  </label>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
              </form>
              <div className="CMFormButton">
                SUBMIT
                <BsArrowUpRight color="black" />
              </div>
            </div>
          </div>
        </div>

        <svg id="CMWave" version="1" baseProfile="full" width="100%" height="100%" viewBox="0 0 1920 969">
          <path
            transform="scale(1, 1)"
            d="M 0,969 V 0,669 C 72.02307692307696,688.0820512820512 144.0461538461539,
            707.1641025641026 264,680 C 383.9538461538461,652.8358974358974 551.8384615384614,579.425641025641 685,
            529 C 818.1615384615386,478.57435897435903 916.6000000000001,451.13333333333344 1002,498 C 1087.3999999999999,
            544.8666666666666 1159.7615384615385,666.0410256410256 1252,746 C 1344.2384615384615,
            825.9589743589744 1456.3538461538462,864.7025641025641 1571,845 C 1685.6461538461538,825.2974358974359 1802.8230769230768,
            747.148717948718 1920,669 C 1920,669 1920,969 1920,969 Z"
            stroke="none"
            strokeWidth="0"
            fill={SVGColorOne}
          />

          <path
            transform="scale(1, 1)"
            d="M 0,969 V 0,1003 C 78.81282051282051,886.2358974358974 157.62564102564102,
            769.4717948717949 277,754 C 396.374358974359,738.5282051282051 556.3102564102566,824.3487179487179 686,
            913 C 815.6897435897434,1001.6512820512821 915.1333333333334,1093.1333333333332 1009,1152 C 1102.8666666666666,
            1210.8666666666668 1191.1564102564103,1237.1179487179488 1275,1209 C 1358.8435897435897,1180.8820512820512 1438.2410256410255,
            1098.3948717948717 1545,1055 C 1651.7589743589745,1011.6051282051283 1785.8794871794871,1007.3025641025641 1920,1003 C 1920,
            1003 1920,969 1920,969 Z"
            stroke="none"
            strokeWidth="0"
            fill={SVGColorTwo}
          />
        </svg>

      </section>

    </div>
  );
}

export default App;
