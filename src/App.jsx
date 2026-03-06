// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './concepts/4.Props/Counter'

function App() {

  return (
    <>

      {/* <h1>Counter by 1</h1>
      <Counter diff={1}/>

      <h1>Counter by 5</h1>
      <Counter diff={5}/>

      <h1>Counter by 10</h1>
      <Counter diff={10}/> */}

      <h1>Counter with Name</h1>
      <Counter diff={1} name="Yathe"/>

    </>
  )
}

export default App
