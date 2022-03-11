
import Image from 'next/image'
import React from 'react'
import Hands from '../assets/images/DSC_8081.JPG'
import Boxman from '../assets/images/DSC_8155.jpg'


export const Services = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${
          quality || 75
        }`;
    }

  return (
      <div className='section my-3'>
          <div className="mt-3 d-flex justify-content-center">
              <h1 className="my-3" id="services">Services</h1>
          </div>
    <div className="row d-flex justify-content-between">
    <div className="col-12 col-md-6 p-3">
        <Image 
        className='card-img-top img-fluid'
        src={Hands}
        loader={myLoader} 
        layout='responsive'
        objectFit='cover'
        fill='cover' 
        height={300} 
        width={500} 
        alt='bell' />
     <div className="p-3 border">
         <h3>Conciergerie</h3>
    </div>
    </div>
    <div className="col-12 col-md-6 p-3">
    <Image 
        className='card-img-top img-fluid'
        src={Boxman} 
        loader={myLoader}
        layout='responsive'
        objectFit='cover'
        //fill='cover' 
        height={300} 
        width={500} 
        alt='bell' />
      <div className="p-3 border">
          <h3>Real Estate</h3>
      </div>
      <div className="card-text">
          
      </div>
    </div>
  </div>
      </div>  
      )
}
