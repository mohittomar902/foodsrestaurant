import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        removeItem,
        updateItemQuantity,
        emptyCart
    }=useCart();
    const [auth,setauth]= useState(false);
        useEffect(()=>{
                 const authSession =JSON.parse(sessionStorage.getItem("authToken"));
                 console.log(authSession);
                     if(authSession){

                                    setauth(authSession.auth);
  }

},[]);
    if(isEmpty) return <div className="d-flex flex-column align-items-center"> <h1 className="text-center m-4">Your Cart is Empty</h1>
              <Link to="/home"><button className="btn btn-primary m-4">Go To Menu</button></Link>  
    </div>
  return (
      <section className="py-4 container">
          <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) totalItems ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {
                                items.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{height:'6rem'}}/>
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td>
                                                <button className="btn btn-info ms-2"
                                                onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                                                >-</button>
                                                <button className="btn btn-info ms-2"
                                                onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                                                >+</button>
                                                <button className="btn btn-danger ms-2"
                                                onClick={()=>removeItem(item.id)}
                                                >Remove Item</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price Rs {cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                    onClick={()=>emptyCart()}
                    >Clear cart</button> 
                    {
                        auth?<Link to="/checkout"><button className="btn btn-primary m-2"
                        onClick={()=>emptyCart()} >Order Now</button></Link>
                        :
                        <Link to="/login"><button className="btn btn-primary m-2"
                     >Order Now</button></Link>
                    }
                    

                </div>
          </div>
      </section>
    
  )
}
