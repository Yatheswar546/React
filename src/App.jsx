// import './App.css'

import { useState, useCallback } from "react";
import SquareComponent from "./concepts/21. useCallback/SquareComponent";

export default function ParentComponent() {

  const [state, setState] = useState(false);
  const [input, setInput] = useState(1);

  console.log("Parent Component Rendered");

  const handler = useCallback(() => {
    setInput(prev => prev + 1);
  }, []);

  function handleParentState() {
    setState(!state);
  };

  return (
    <>
      
      <button onClick={handleParentState}>
        Re-render State
      </button>

      <SquareComponent 
        handler={handler}
        input={input}
      />

    </>
  );
}