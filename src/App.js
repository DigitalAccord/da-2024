

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
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Contact from './pages/Contact/Contact'
import OurWork from './pages/OurWorks/OurWork';
import Seo from './pages/Seo/Seo';
import Add from './pages/Advertizement/Add';
import User from './pages/UserExperience/User';
import Development from './pages/Development/Development';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Manegement from './pages/Management/Manegement';
import GoogleAds from './pages/GoogleAds/GoogleAds';
import Test from './Test/Test';
import { ApolloProvider, gql } from '@apollo/client';
import ScrollToTop from './ScrollToTop';
import Bussiness from './pages/Bussiness/Bussiness';
import ThankYou from './pages/ThankYou/ThankYou';
import Privacy from './pages/Privacy/Privacy';
import { Terms } from './pages/Terms/Terms';
import Blog from './pages/Blog/Blog';
import Singular from './pages/Singular/Singular';


import { ToastContainer, toast } from 'react-toastify';


function App() {



  return (
    <>

      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/da-2024' : ''}>
<ToastContainer />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/add" element={<Add />} />
          <Route path="/user" element={<User />} />
          <Route path="/development" element={<Development />} />
          <Route path="/case/:slug" element={<CaseStudy />} />
          <Route path="/management" element={<Manegement />} />
          <Route path="/google" element={<GoogleAds />} />
          <Route path="/bussiness" element={<Bussiness />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path={`/:slug`} element={<Singular />} />

        </Routes>
        <Footer />
     
      </BrowserRouter>


      {/* <Test/> */}
    </>
  );
}

export default App;
