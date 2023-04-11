import { useState } from 'react';
import { motion } from 'framer-motion';
import beigeBlackIcon from './assets/Icons/color1.png';
import orangeGreenIcon from './assets/Icons/color2.png';
import yellowBlueIcon from './assets/Icons/color3.png';
import purpleIcon from './assets/Icons/color4.png'
import './assets/sass/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section id="Homepage">
        <div className="NavBar">
          <a href="#AboutMe">ABOUT ME</a>
          <a href="#TechStack">SKILLS</a>
          <a href="#Portfolio">PORTFOLIO</a>
          <a href="#ContactMe">CONTACT</a>
          <motion.div className="colorSchemeSelector" whileHover={{ x: '200px' }}>
            <motion.div className="css-text">COLOR</motion.div>
            <motion.div className="css-hidden">
            <img src={yellowBlueIcon}/>
            <img src={orangeGreenIcon}/>
            <img src={purpleIcon}/>
            <img src={beigeBlackIcon}/>
            </motion.div>
          </motion.div>
        </div>
        <h1>ERIC KALIN</h1>
      </section>
      <section id="AboutMe">
        <div className="aboutMeText">
          ABOUT ME
          ABOUT ME
          ABOUT ME
          ABOUT ME
        </div>
      </section>
      <section id="TechStack">
        <h1>Page Three</h1>
      </section>
      <section id="Portfolio">
        <h1>Page Four</h1>
      </section>
      <section id="ContactMe">
        <h1>Page Five</h1>
      </section>

    </div>
  )
}

export default App
