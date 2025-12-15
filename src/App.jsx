import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Services';



function App() {
<<<<<<< HEAD

  return (
    <>
<<<<<<< HEAD
      
=======
           
>>>>>>> 520ad001a4f8ed15b2ccffd6aeb1d9a1c00cd15d
    </>
  ) 
}
=======
  return (
    <BrowserRouter>
    <Routes>
      
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
      </Route>

    </Routes>
    </BrowserRouter>
  );

}   
>>>>>>> 99443c5e21de59ff77882275bb9c6ecd135df9a7

export default App
