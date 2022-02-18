import React from 'react'
import Image from 'next/image'
import Dummy from '../assets/images/dummy.png'
export const Team = () => {
  return (
    <div className='section my-5'>
        <div className="container">

        <div className=' d-flex justify-content-center'>
        <h1 className='my-5' id="team">Team</h1>
       </div>   
  <div className="row g-4 d-flex justify-content-evenly">
      <div className="col-lg-4 d-flex justify-content-center">                                                                                                                                                                             
    <div className="h-100">
      <Image src={Dummy} className="card-img-top img-fluid mx-auto " height={300} width={200} alt="..." />
      
        <h4>Emmanuel</h4>
        <p className="text-mute"></p>
      </div>
    </div>
   
    
  
      <div className="col-lg-4 d-flex justify-content-center">                                                                                                                                                                             
    <div className="h-100">
      <Image src={Dummy} className="card-img-top img-fluid mx-auto " height={300} width={200} alt="..." />
      
        <h4>Cristian</h4>
        <p className="text-mute text-center"></p>
      </div>
    </div>
   
    </div>
        </div>
    </div>

    
  )
}
