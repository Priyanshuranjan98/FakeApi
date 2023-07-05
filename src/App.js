import logo from './logo.svg';
import './App.css';
import Shop from './component/Shop';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Products from './component/Products';
import Users from './component/Users';
import Cart from './component/Cart';
import Home from './component/Home';
import { useState } from 'react';
function App() {
  const[myStyle,setStyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const toogleStyle=(color)=>{
    console.log(color)
    if(color){
      setStyle({
        color:"white",
        backgroundColor:"black"
      })
    }
    else{
      setStyle({
        color:"black",
        backgroundColor:"white"
      })
    }
  
  }
  return (
   <>
   <Shop toogleStyle={toogleStyle}/>
   <Routes>
          <Route path="/products" element={<Products myStyle={myStyle} />} />
          <Route path="/users" element={<Users myStyle={myStyle}/>}/>
          <Route path="/cart" element={<Cart myStyle={myStyle}/>}/>
          <Route path='/' element={<Home myStyle={myStyle}/>}/>
      </Routes>
   </>
  );
}

export default App;
