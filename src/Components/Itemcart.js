import React from 'react'
import '../App.css'
import { useCart } from 'react-use-cart'

export const Itemcart = (props) => {
    const {addItem}=useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hideen h-100 shadow">
  
  <div className="card-body">
      <div  >
  <img src={props.img } class="card-img img-fluid" style={{height:'12rem'}} />
  </div>
  <div >
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.price}</p>
    <button  className="btn btn-success" 
    onClick={()=>addItem(props.item)}>
        Add to Cart</button>
  </div>
  </div>
</div>
</div>
    
  )
}
