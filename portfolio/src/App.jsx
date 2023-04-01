import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section>
        <h1>Page One</h1>
      </section>
      <section>
        <h1>Page Two</h1>
      </section>
      <section>
        <h1>Page Three</h1>
      </section>
      <section>
        <h1>Page Four</h1>
      </section>
      <section>
        <h1>Page Five</h1>
      </section>

    </div>
  )
}

export default App
