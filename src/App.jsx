// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Intro from './concepts/01. Introduction/Intro'
import { Add, Sub } from './concepts/01. Introduction/NamedModule'

function App() {

  const a = 7;
  const b = 3;

  return (
    <>
      <Intro />
      
      <h1>Addition of {a} + {b} = {Add(a,b)}</h1>
      <h1>Subtraction of {a} - {b} = {Sub(a,b)}</h1>

    </>
  )
}

export default App
