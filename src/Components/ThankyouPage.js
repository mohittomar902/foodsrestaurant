import React from 'react'
import { Link } from 'react-router-dom'

export const ThankyouPage = () => {
  return (
     
    <div className="d-flex justify-content-center align-items-center">
    <div className="card p-0 overflow-hideen w-50 shadow">
         <div className="card-body">
                <h2 className="card-title text-center">Order Placed</h2>
                <p className="card-text ">Thank you for your order</p>
                
         </div>
         <Link to="/home"><button className="btn btn-primary m-4">Go To Menu</button></Link>
         
    </div>
</div>

  )
}
