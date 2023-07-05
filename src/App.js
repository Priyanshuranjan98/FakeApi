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

function App() {
  return (
   <>
   <Shop/>
   <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
   </>
  );
}

export default App;
