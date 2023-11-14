
import './App.css';
import Footer from './Footer/Footer';
import Craousel from './component/Craousel/Craousel';
import Solution_respo from './component/Sulution_respo/Solution_respo';
import Category from './component/category/Category';
import Solutions from './component/solution/Solutions';

function App() {
  return (
   <>
   {/* <Solutions/> */}
   <Solution_respo/>
   <Craousel/>
   <Category/>
   <Footer/>
   </>
  );
}

export default App;
