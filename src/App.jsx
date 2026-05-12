// import './App.css'

import { useRef, useState } from "react";

export default function App() {

  // Normal variable
  let normalCounter = 0;

  // useState variable
  const [count, setCount] = useState(0);

  // useRef variable
  const counterRef = useRef(0);

  function handleIncrement() {  

    // Normal variable
    normalCounter++;
    console.log("Normal Variable:", normalCounter);

    // useRef variable
    counterRef.current++;
    console.log("useRef Value:", counterRef.current)

    // useState variable
    setCount(prev => prev + 1);
  }

  console.log("Component Re-rendered");

  return (
    <div>

      <h1>useState Value: {count}</h1>
      
      <h1>useRef Value: {counterRef.current}</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}