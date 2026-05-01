// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import Intro from './concepts/01. Introduction/Intro'
// import { Add, Sub } from './concepts/01. Introduction/NamedModule'

// import Functional from './concepts/02. FunctioncalComponents/Functional';

// import Counter from './concepts/03. Hooks/Counter'

// import Counter from './concepts/04. Props/Counter'

// import ToggleCounter from './concepts/05. ConditionalRendering/ConditionalRendering';

// import { Route, Routes } from 'react-router-dom';
// import Navbar from './concepts/06. ReactRouter/Navbar'
// import About from './concepts/06. ReactRouter/pages/About';
// import Contact from './concepts/06. ReactRouter/pages/Contact';
// import Home from './concepts/06. ReactRouter/pages/Home';
// import Services from './concepts/06. ReactRouter/pages/Services';

import { Route, Routes } from 'react-router-dom';
// import GoToCart from './concepts/07. ProgrammaticNavigation/GoToCart';
// import Cart from './concepts/07. ProgrammaticNavigation/pages/Cart';
import Dashboard from './concepts/07. ProgrammaticNavigation/pages/Dashboard';
import Login from './concepts/07. ProgrammaticNavigation/LoginPage';

function App() {

  return (
    <>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;