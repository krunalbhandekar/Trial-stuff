
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import {Routes,Route} from "react-router-dom";
import Cartdetail from "./components/Cartdetail"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/cart' element={ <Cart/>}/>
        <Route path='/cart/:id' element={ <Cartdetail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
