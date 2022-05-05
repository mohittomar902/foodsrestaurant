import './App.css';
import Header from './Components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Components/Home';
import {CartProvider} from 'react-use-cart';
import { Cart } from './Components/Cart';
import { BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import { Welcome } from './Components/Welcome';
import { LogInPage } from './Components/LogInPage';
import { ThankyouPage } from './Components/ThankyouPage';
import { useState } from 'react';
function App() {
  const [auth,setauth]=useState(false);
  
  return (
    
    <CartProvider>
    <Header auth={auth} setauth={setauth}/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<LogInPage auth={auth} setauth={setauth}/>}/>
      <Route path='checkout' element={<ThankyouPage/>}/>
    </Routes>
    </CartProvider>
    
  );
}

export default App;
