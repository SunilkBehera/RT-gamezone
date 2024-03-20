import React, { useState,useEffect } from "react";
import './App.css';
import AppStore from './components/AppStore/AppStore';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Player from './components/Player/Player';
import Quotes from './components/Quotes/Quotes';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);




  return (
    <div className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-500'>
        <Navbar/>
        <Hero togglePlay={togglePlay}/>
        <Quotes/>
        <Banner togglePlay={togglePlay}/>
        <Banner2 togglePlay={togglePlay}/>
        <Features/>
        <AppStore/>
        <Footer/>

        <Player isPlay={isPlay} togglePlay={togglePlay} />
        <Quotes/>
        
    </div>
  );
}

export default App;
