import Image from 'next/image'
import Link from 'next/link'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/property';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Contact } from '../components/contact/Contact';
import { useState, useEffect } from 'react';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { render } from 'nprogress';



const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${
    quality || 75
  }`;
};
const myLoader2 = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${
    quality || 75
  }`;
};

 const Banner = ({purpose, imageUrl, title1, title2,desc1, linkName,buttonText}) => {
  return (
  <div className='row flex-lg-row-reverse align-items-center g-5  justify-content-center'>
    <div className=" col-10 col-sm-8 col-lg-6">  
    <Image 
    className='d-block img-fluid mx-lg-auto' 
    src={imageUrl} 
    width={700} 
    height={500} 
    alt='banner'
    loader={myLoader} />
    </div>
    <Link href={linkName} passHref>
    <div className="col-lg-4 p-3 text-center text-lg-start border-0">
      <h1 className="display-6 fw-bold lh-1 mb-3">{purpose}</h1>
      <p className="lead">{title1}<br /> {title2}</p>
      <p className="lead">{desc1}</p>
          
      <button className="btn link btn-primary btn-xl w-100">
      <Link href={linkName} passHref >
         <a> {buttonText}</a>
      </Link>
      </button>
    </div>
    </Link>
  </div>
  )
};




export default function Home({data}) {
const { 
  results: {
  client: {
    secondhandListing 
  }   
 
} 
}= data
//console.log('index page results',secondhandListing);
 
  
  return (
    <>
  
    <div data-spy="scroll" data-bs-target="main-nav" data-offset="0" className="scrollspy-example" tabIndex="0"> 
    <Services />
    
      
  

    <div className='section d-flex justify-content-center my-5'>
    <h1 className='my-5' id="#scrollspyHeading2">Properties</h1>
    </div>
    <div 
    className="container-fluid d-flex  justify-content-xxl-between align-items-center flex-wrap flex-lg-nowrap">
      <div className='section d-flex'>
      <Banner
           
      purpose="Rent a Home"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?operationType=rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" 
      />
      </div>
     <div className="section d-flex">

      <Banner 
      purpose="Buy a Home"
      title1="Find, Buy & Own"
      title2="Your Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?operationType=sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"/>
      
      </div>
    </div>       
    <Team />
    <Contact />
      </div>
      </>
  )
}


// export async function getStaticProps() {
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//       propertyForSale: propertyForSale?.hits,
//       propertyForRent: propertyForRent?.hits,
//     }
//   }
// }
export async function getServerSideProps() {
  const res = await fetchApi(`${baseUrl}/api/listing`)
  // const data = await res.json()

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { data : res }, // will be passed to the page component as props
  }
}