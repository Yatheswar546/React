// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import Intro from './concepts/01. Introduction/Intro'
// import { Add, Sub } from './concepts/01. Introduction/NamedModule'

// import Functional from './concepts/02. FunctioncalComponents/Functional';

// import Counter from './concepts/03. Hooks/Counter'

import Counter from './concepts/04. Props/Counter'

function App() {

  return (
    <>
      
      <h1>Counter by 1</h1>
      <Counter diff={1} name={"Yathe"} />

      <h1>Counter by 5</h1>
      <Counter diff={5} />

      <h1>Counter by 10</h1>
      <Counter diff={10} />

    </>
  )
}

export default App;