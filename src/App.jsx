// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Intro from './concepts/1-Introduction/Intro.jsx'
// import {Add, Sub} from './concepts/1-Introduction/NamedModule.jsx'
import Functional, {Add, Sub} from './concepts/2.FunctioncalComponents/Functional'

function App() {

  const a = 7;
  const b = 3;

  return (
    <>
      
      <Functional />

      <h1>Addition of {a} + {b} = {Add(a,b)}</h1>
      <h1>Subtraction of {a} - {b} = {Sub(a,b)}</h1>
    </>
  )
}

export default App
