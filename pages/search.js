import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {BsFilter} from 'react-icons/bs'
import Property from '../components/property'
import SearchFilters from "../components/SearchFilters";
import noresult from '../assets/images/noresult.svg'
import { baseUrl, getProperties } from "../utils/fetchApi";
 const Search = ({ properties}) => {
  console.log(properties)
  const [searchFilters, setsearchFilters] = useState(false);
  const router = useRouter();
  
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  
    return (
        <div className="container">
         <div 
            className="d-flex align-items-center fs-2 border-bottom-2 justify-content-center " 
            cursor="pointer"
            onClick={() => setsearchFilters((prevFilters) => !prevFilters) }>
            <p>Search Property by filter</p>
            <BsFilter className="ps-1 " />
            </div>
            {searchFilters && <SearchFilters />}
            <p className="fs-1 p-3">Properties {` for ${router.query.operationType } `} </p>
            <div className="d-flex flex-wrap">
                {properties.map((property) => <Property property={property} key={property.id} loader={myLoader} />)}
            </div>
            {properties.length === 0 && (
               <div className="d-flex flex-col my-3 justify-content-center alig-items-center">
                   <Image alt="no result" src={noresult}/>
               </div> 
            )} 
        </div>
    );
};


export async function getServerSideProps({query}) {
const  operationType = query.operationType  || 'rent';  
// const  rentFrequency = query.rentFrequency  || 'yearly';  
// const  minPrice = query.minPrice  || '0';  
// const  maxPrice = query.maxPrice  || '1000000';  
// const  roomsMin = query.roomsMin  || '0';  
// const  bathsMin = query.bathsMin  || '0';  
// const  sort = query.sort  || 'price-desc';  
// const  areaMax = query.areaMax  || '35000';  
// const  locationExternalIDs = query.locationExternalIDs  || '5002';  
// const  categoryExternalID= query.categoryExternalID  || '4';  


const data = await getProperties(`${baseUrl}/api/properties/operation?operationType=${operationType}`);
  
return {
      props: {
        properties : data,
        
      }
    }

  }
  
export default Search;
//&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}