
import Image from 'next/image'
import React from 'react'
import Hands from '../assets/images/DSC_8081.jpg'
import House from '../assets/images/casa.jpg'
export const Services = () => {
  return (
      <div className='section my-5'>
          <div className="mt-3 d-flex justify-content-center">
              <h1 className="my-5" id="services">Services</h1>
          </div>
    <div className="row gx-5 d-flex justify-content-between">
    <div className="col-12 col-md-6 p-5">
        <Image 
        className='card-img-top img-fluid'
        src={Hands} 
        layout='responsive'
        fill='cover' 
        height={300} 
        width={500} 
        alt='bell' />
     <div className="p-3 border bg-light">
         <h3>Conciergerie</h3>
    </div>
    </div>
    <div className="col-12 col-md-6  p-5">
    <Image 
        className='card-img-top img-fluid'
        src={House} 
        layout='responsive'
        fill='cover' 
        height={300} 
        width={500} 
        alt='bell' />
      <div className="p-3 border bg-light">
          <h3>Real Estate</h3>
      </div>
      <div className="card-text">
          
      </div>
    </div>
  </div>
      </div>  
      )
}
