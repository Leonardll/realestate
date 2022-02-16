import React from 'react'
import Image from 'next/image'
import Dummy from '../assets/images/dummy.png'
export const Team = () => {
  return (
    <div className='section'>
        <div className=' d-flex justify-content-center'>
        <h1>Team</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card h-100">
      <Image src={Dummy} className="card-img-top img-fluid " height={300} width={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Image src={Dummy} className="card-img-top img-fluid" height={300} width={400} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
 </div>
    </div>
  )
}
