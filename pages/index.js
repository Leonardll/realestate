import Image from 'next/image'
import Link from 'next/link'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/property';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';


 const Banner = ({purpose, imageUrl, title1, title2,desc1, linkName,buttonText}) => {
  return (
  <div className='row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center mb-3'>
    <div className=" col-6 col-lg-8">  
    <Image className='card-img-top d-block img-fluid mx-lg-auto' src={imageUrl} width={500} height={350} alt='banner' />
    </div>
    <div className=" col-4 col-lg-4 p-3 border-0">
      <p className="display-5 fw-bold lh-1 mb-3">{purpose}</p>
      <p className="card-text fs-4">{title1}<br /> {title2}</p>
      <p className="lead fs-5 py-3">{desc1}</p>
      <button className="btn btn-primary btn-xl w-100">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </button>
    </div>

  </div>
  )
};



export default function Home({propertyForRent, propertyForSale}) {
  //console.log(propertyForRent, propertyForSale)
  return (
    
    <div data-spy="scroll" data-bs-target="main-nav" data-offset="0" className="scrollspy-example" tabIndex="0"> 
    <Services />
    <div className='d-flex justify-content-center mt-3'>
    <h1 id="#scrollspyHeading2">Properties</h1>
    </div>
    <div className="container-fluid d-flex justify-content-center justify-content-xxl-between align-items-center flex-wrap">
      <div className='section mt-3 '>
      <Banner 
      purpose="Rent a Home"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
      </div>
      {/* <div className="section d-flex">
        <div className="row justify-items-center"> 
        
        
        {propertyForRent.map((property => <Property property={property} key={property.id}/>))}
        </div>
      </div> */}
     
      <div className='section mt-3'>
      <Banner 
      purpose="Buy a Home"
      title1="Find, Buy & Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"/>
      </div>
      {/* <div className="section d-flex flex-wrap">
        <div className="row justify-items-center">
        
        {propertyForSale.map((property => <Property property={property} key={property.id}/>))}
        </div>
      </div> */}
    </div>
    <Team />
    <Contact />
      </div>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}
