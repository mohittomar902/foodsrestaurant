import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className='p-2'>
        <h1 className="text-center m-3 p-2">Welcome to Food's Kitchen</h1>
        </div>
        <div className='p-2'>
        <Link to='/home'><button  className="btn btn-info m-2 p-2">Go To Menu</button></Link>
    </div>
    </div>
    

    

  )
}
