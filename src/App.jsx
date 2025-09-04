import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
 

 

  return (
    <div style={{height:"100%",width:"100%",backgroundColor:"#F9FAFB"}}>
       <Navbar  />
      <div style={{ paddingTop: '80px', width: '90%' ,position:'sticky' }}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        </div>
        <div style={{ paddingTop: '80px', width: '100%' ,position:'sticky' }}>
        <Footer />
      </div>
    </div>
     
    
  );
}

export default App;




