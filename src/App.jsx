// import './App.css'

import { useState } from "react";
import SquareComponent from "./concepts/21. ReactMemo/SqaureComponent";

export default function ParentComponent() {

  const [state, setState] = useState(false);
  const [input, setInput] = useState(1);

  console.log("Parent Component Rendered");

  const handler = () => {
    setInput(prev => prev + 1);
    
  };

  const stateHandler = () => {
    setState(!state);
  };

  return (
    <>
      
      <button onClick={stateHandler}>
        Change Parent State
      </button>

      <SquareComponent 
        handler={handler}
        input={input}
      />

    </>
  );
}