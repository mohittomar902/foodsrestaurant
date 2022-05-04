import React from 'react'
import { Itemcart } from './Itemcart'
import data from '../DataSet/data'

export const Home = () => {
  return (
    <>
    <h1 className="text-center mt-3">Restaurant Menu</h1>
    <section className="py-4 container">
        <div className="row justify-content-center">
            {
                data.productData.map((item,index)=>{
                    return(
                        <Itemcart
                         img={item.img} 
                         title={item.title} 
                         price={item.price} 
                         item={item}
                         key={index}/>
                    )
                })
            }
            
        </div>
    </section>
    </>
  )
}
