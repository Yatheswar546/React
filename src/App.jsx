// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from "./concepts/6.ReactRouter/Navbar";
import Home from "./concepts/6.ReactRouter/pages/Home";
import About from "./concepts/6.ReactRouter/pages/About";
import Services from "./concepts/6.ReactRouter/pages/Services";
import Contact from "./concepts/6.ReactRouter/pages/Contact";

function App() {

  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>

    </>
  )
}

export default App
