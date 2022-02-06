import Image from 'next/image'
import Link from 'next/link'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/property';


 const Banner = ({purpose, imageUrl, title1, title2,desc1, linkName,buttonText}) => {
  return (
  <div className='d-flex flex-wrap justify-content-center align-items-center mb-3'>
    <Image className='card-img-top' src={imageUrl} width={500} height={300} alt='banner' />
    <div className="card p-3 border-0">
      <p className="card-text text-small">{purpose}</p>
      <p className="card-text text-xlarge">{title1}<br /> {title2}</p>
      <p className="card-text text-large py-3">{desc1}</p>
      <button className="btn btn-primary btn-xl">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </button>

    </div>

  </div>
  )
};



export default function Home({propertyForRent, propertyForSale}) {
  //console.log(propertyForRent, propertyForSale)
  return (
    <div className="container">
     
      <div className='section'>
      <Banner 
      purpose="Rent A Home"
      title1="Rental Homes for"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
      </div>
      <div className="section d-flex">
        <div className="row justify-items-center"> 
        
          
        {propertyForRent.map((property => <Property property={property} key={property.id}/>))}
      </div>
      </div>
     
      <div className='section'>

      <Banner 
      purpose="Buy a Home"
      title1="Find, Buy & Own Your"
      title2="Dream Home"
      desc1="Explore Apartments, Villas, Homes"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"/>
      </div>
      <div className="section d-flex flex-wrap">
        <div className="row justify-items-center">

        {propertyForSale.map((property => <Property property={property} key={property.id}/>))}
        </div>
      </div>
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
