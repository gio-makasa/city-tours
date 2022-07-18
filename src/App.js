import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home'
import TourList from './components/TourList'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  
  const [scrolling, setscrolling] = useState(0);

  useEffect(() => {
    const onScroll = () => setscrolling(window.pageYOffset);
    
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <Navbar height={scrolling}/>
    <Home/>
    <hr/>
    <TourList/>
    <hr/>
    <About/>
    <hr/>
    <Footer/>
    </>
  );
}

export default App;