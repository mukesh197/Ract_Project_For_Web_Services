import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import WebDev from './Pages/WebDev/WebDev';
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing';
import UXUI from './Pages/UXUI/UXUI';
import IOT from "./Pages/IOT/IOT"
import AppDev from "./Pages/AppDev/AppDev"
import Navbars from './Component/Header/Navbar/Navbar';

function App() {
  return (
   <div >
     <Navbars/>
     <Routes>
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/webdev' element={<WebDev/>} ></Route>
       <Route path='/digitalmarket' element={<DigitalMarketing/>} ></Route>
       <Route path='/uxui' element={<UXUI/>} ></Route>
       <Route path='/iot' element={<IOT/>} ></Route>
       <Route path='/appdev' element={<AppDev/>} ></Route>
     </Routes>
   </div>
  );
}

export default App;
