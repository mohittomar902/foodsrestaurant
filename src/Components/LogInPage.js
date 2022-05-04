import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const LogInPage = () => {
  const [user,setuser]=useState({});
 
  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" 
                className="form-control form-control-lg" 
                onChange={(e)=>{setuser({...user,email:e.target.value})}}
                placeholder='Email' />
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" 
                className="form-control form-control-lg" 
                onChange={(e)=>{setuser({...user,pass:e.target.value})}}
                placeholder='Password'/>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
            <a href="/cart">
              <button class="btn btn-outline-light btn-lg px-5" 
              onClick={()=>{
               
                if(user.email==="abc@gmail.com"&&user.pass==="1234"){
                  sessionStorage.setItem("authToken", JSON.stringify({auth:true}));
                 
                }
                else{
                  sessionStorage.setItem("authToken", JSON.stringify({auth:false}));
                }
              }}
              type="submit">Login</button>
              </a>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <Link to="/home" class="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
