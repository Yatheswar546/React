import './App.css'

import { useState } from "react";
import ParentComponent from './concepts/22. useContext/ParentComponent';
import { CountContext } from './concepts/22. useContext/CountContext';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>

        <h1>App Component</h1>

        <ParentComponent />

      </CountContext.Provider>
    </>
  );
}