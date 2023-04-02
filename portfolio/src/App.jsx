import { useState } from 'react'
import './App.scss'

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
        </div>
        <h1>Eric Kalin</h1>
      </section>
      <section id="AboutMe">
        <h1>Page Two</h1>
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
