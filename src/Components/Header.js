import React from 'react'
import logo2 from './images/logo2.png'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';


export const Header = () => {
  const {totalItems}=useCart();
  const [auth,setauth]= useState(false);
        useEffect(()=>{
                 const authSession =JSON.parse(sessionStorage.getItem("authToken"));
                 console.log(authSession);
                     if(authSession){

                                    setauth(authSession.auth);
  }

},[]);
      const log=()=>{
        sessionStorage.removeItem("authToken");
        setauth(false);
      }
  return (
    <nav className="navbar-dark bg-primary " style={{height:70}}>
    <div className="container-fluid w-100 d-flex justify-content-between p-3">
      <div>
      <Link className="navbar-brand" to="/">
        <img src={logo2} alt="" width="50" height="44" class="d-inline-block align-text-top " />
        Food's Restaurant
      </Link>
      </div>
      <div>
      <Link to="/cart"><button type="button" class="btn btn-secondary btn-lg">Cart : {totalItems}</button></Link>
      {
        auth?<button id='btn1' className="btn btn-primary m-2"
        onClick={()=>log()} >LogOut</button>:
        <Link to='login'><button id='btn1' className="btn btn-primary m-2"
         >LogIn</button>
             </Link>
       }
    </div>
    </div>
  </nav>
  )
}
export default Header;