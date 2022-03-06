import Link from "next/link";
import Image from "next/image";
import {FaBed, Fabath, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millyfi from 'millify'
import defaultImage from '../assets/images/house.jpg';
import Logo from '../assets/images/logo.svg'

const Property = ({ property: {images,id, descriptions,operation, features} }) => (
 
   <Link href={`/property/:[propertyId]`} passHref as ={`property/${id}`}> 
  

          <div className="card m-2" style={{width:'20rem'}}>
              <Image className="card-img pt-2 img-fluid" src={images.image[0].url ? images.image[0].url : defaultImage } height={700} width={900} alt="" />
    {console.log(descriptions.description[0].comment)} 
          
          <div className="card-body">
              <div className="d-flex justify-content-between pt-2">
                <div className="d-flex align-item-center">
                    <div className="card-text text-success pe-1">
                        {/* {isVerified && <GoVerified />} */}
                    </div>
                <div className="d-flex">
                   
                    <div className="d-flex">

                     <p className="card-text fs-6 fw-bold">EUR {millyfi(operation.price)}</p>
                    </div>
                    <div className="ps-5">
                      <span>
                        <Image className="rounded-circle img-fluid" height={40} width={70} alt="" src={Logo}/>
                      </span>
                      </div>
                      
                </div>
                </div>
              </div>
          </div>
          <div className="card-body">
                        <div className="d-flex align-items-centter justify-content-between">
                            <span>{features.bedrooms} <i><FaBed /></i></span> 
                            <span>{features.bathrooms} <i><FaBath /></i></span> 
                            <span>{features.construtedArea} sqft<i> <BsGridFill /></i></span> 
                        </div>
          <div className="card-text border-top-1 pt-2">{descriptions.description.comment > 20 ? `${descriptions.description.comment.substring(0,30)}...` :descriptions.description[0].comment}</div>
          </div> 
          </div>
      

   </Link>
);

export default Property;
