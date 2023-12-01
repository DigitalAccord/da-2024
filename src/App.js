

import './App.css';
import Footer from './Footer/Footer';
import Craousel from './component/Craousel/Craousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackArrow, BusinessIcon, CaseStudiesIcon, ChatIcon, ExperienceIcon, HomeIcon, MainLogo, MenuBarClose, MenuBarOpen, PeopleIcon, SpeakerIcon, WorkIcon } from './assets/svgIcons';
import PropTypes from 'prop-types';
import Solution_respo from './component/Sulution_respo/Solution_respo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CenterMode from './component/MySwiper/Swiper';

import Category from './component/category/Category';
import Solutions from './component/solution/Solutions';
import { Banner } from './Banner/Banner';

import About from './pages/About/About';
import { useState } from 'react';
import Navbar from './Navbar/Navbar';



function App() {


  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner />}/>
          <Route path="/about" element={<About />} />
       
      </Routes>
        <Footer/>
    </BrowserRouter>
  


{/* <Banner/> */}

   {/* <About/> */}
{/* <Footer/> */}

   

  

   

   </>
  );
}

export default App;
