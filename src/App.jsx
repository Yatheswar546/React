import { useState } from 'react';
import './App.css'

import CounterWithTimer from './concepts/09. useEffect/CounterWithTimer';

function App() {

  const [show, setShow] = useState(true);

  return (
    <>  
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {show && <CounterWithTimer />}

    </>
  );
}

export default App;
