// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import Intro from './concepts/01. Introduction/Intro'
// import { Add, Sub } from './concepts/01. Introduction/NamedModule'

// import Functional from './concepts/02. FunctioncalComponents/Functional';

// import Counter from './concepts/03. Hooks/Counter'

// import Counter from './concepts/04. Props/Counter'

// import ToggleCounter from './concepts/05. ConditionalRendering/ConditionalRendering';

import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './concepts/06. ReactRouter/Navbar'
import About from './concepts/06. ReactRouter/pages/About';
import Contact from './concepts/06. ReactRouter/pages/Contact';
import Home from './concepts/06. ReactRouter/pages/Home';
import Services from './concepts/06. ReactRouter/pages/Services';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;