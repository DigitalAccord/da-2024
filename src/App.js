

import './App.css';
import Footer from './Footer/Footer';
import Craousel from './component/Craousel/Craousel';

import Solution_respo from './component/Sulution_respo/Solution_respo';

import CenterMode from './component/MySwiper/Swiper';

import Category from './component/category/Category';
import Solutions from './component/solution/Solutions';
import { Banner } from './Banner/Banner';

function App() {
  return (
   <>
   <Banner/>
   <Solutions/>
   {/* <Solution_respo/> */}
   {/* <Craousel/> */}
   <CenterMode/>
   <Category/>
   <Footer/>

   
   {/* <Craousel/> */}
   {/* <Category/>
   <Footer/> */}

   </>
  );
}

export default App;
