
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from'react-router-dom'
import { useEffect, useRef } from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Work from './Pages/Work'
import Footer from './Components/Footer';

import Lenis from '@studio-freight/lenis';

function App() {

  const lenisRef = useRef();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust as needed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis; // Store Lenis instance in ref

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);
  return (
    
  <div className="scroll-container bg-zinc-900 overflow-hidden">
  <Navbar/>
  
  <Routes> 
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/work" element={<Work/>} />
  </Routes> 
  
  <Footer/>
  </div>
  );
}

export default App;
