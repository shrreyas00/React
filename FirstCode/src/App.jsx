import React from 'react'
import card from './components/card'
import Navbar from './components/Navbar'

const  App = () => {
  return (
    <div>
      <Navbar/>

      <div className='Vin'>
        <h1> App </h1>
        <p>Lorem vinay Kumar dolor sit amet consectetur adipisicing elit. Saepe deleniti rem dolorum, recusandae ducimus explicabo. Omnis quam enim temporibus sed!</p>   
      </div>
      <div className='Vin'>
        <h1> App </h1>
        <p>Lorem vinay Kumar dolor sit amet consectetur adipisicing elit. Saepe deleniti rem dolorum, recusandae ducimus explicabo. Omnis quam enim temporibus sed!</p>   
      </div>
      {card()}
      {card()}
      {card()}
      
      
      
    
    </div>
  )
}


export default  App
