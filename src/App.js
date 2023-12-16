

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
import Contact from './pages/Contact/Contact'
import OurWork from './pages/OurWorks/OurWork';
import Seo from './pages/Seo/Seo';
import Add from './pages/Advertizement/Add';
import User from './pages/UserExperience/User';



function App() {


  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Banner />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/add" element={<Add />} />
          <Route path="/user" element={<User />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
   

   

  

   

   </>
  );
}

export default App;
