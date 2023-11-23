

import './App.css';
import Footer from './Footer/Footer';
import Craousel from './component/Craousel/Craousel';

import Solution_respo from './component/Sulution_respo/Solution_respo';

import CenterMode from './component/MySwiper/Swiper';

import Category from './component/category/Category';
import Solutions from './component/solution/Solutions';
import { Banner } from './Banner/Banner';
import Test from './Test/Test';

function App() {
  return (
   <>
   {/* <Test/> */}
   <Banner/>
   <Solutions/>
   
   <CenterMode/>
   <Category/>
   <Footer/>

   {/* <Solution_respo/> */}
   {/* <Craousel/> */}
   {/* <Craousel/> */}
   {/* <Category/>
   <Footer/> */}

   </>
  );
}

export default App;
