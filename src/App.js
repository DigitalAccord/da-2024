

import './App.css';
import Footer from './Footer/Footer';
import Craousel from './component/Craousel/Craousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Solution_respo from './component/Sulution_respo/Solution_respo';

import CenterMode from './component/MySwiper/Swiper';

import Category from './component/category/Category';
import Solutions from './component/solution/Solutions';
import { Banner } from './Banner/Banner';

import About from './pages/About/About';

function App() {
  return (
   <>
  
   {/* <Banner/>
   <Solutions/>
   <CenterMode/>
   <Category/>
   <Footer/> */}
   <About/>


   

   </>
  );
}

export default App;
