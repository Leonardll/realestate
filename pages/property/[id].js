import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import Image from "next/image";

const PropertyDetails = ({propertyDetails:{price,rentFrequency,rooms, title, baths, area,agency,isVerified, description, type, purpose,furnishingStatus, amenities,photos }}) => {
  return <div className="m-auto p-3">
      {photos && <ImageScrollbar data={photos} />}
      <div className="w-100">
          <div className="d-flex pt-1 align-items-center">
              <div className="pe-2 text-success">
                  {isVerified && <GoVerified />}
              </div>
              <p className="card-text fs-6 pt-1 fw-bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</p>
              <div className="ps-5 d-flex flex-end">
                      <span>
                        <Image className="rounded-circle img-fluid" height={40} width={70} alt="" src={agency?.logo?.url}/>
                      </span>
              </div>
             
          </div>
          <div className="d-flex align-items-center">
                            <span className="px-1">{rooms} <i><FaBed /></i></span>
                            <br />
                            <span className="px-1">{baths} <i><FaBath /></i></span> 
                            <br />                                                                              
                            <span className="px-1">{millify(area)} sqft<i> <BsGridFill /></i></span> 
                        </div>
          <p className="text mb-2 fs-4 fw-bold  pt-1">{title}</p>
          <p className="text mb-2 lh-lg  pt-1">{description}</p>
      </div>
      <div className="div">
          {amenities.length && <p className="fs-3 fw-bold">Amenities</p>}
          <div className="d-flex flex-wrap">
              {amenities.map((item) =>(
                  item.amenities.map((amenity) => (
                      <p key={amenity.text} className="fw-bold bg-light fs-6 text-primary m-1 p-2">{amenity.text}</p>
                  ))
              ))}
          </div>
      </div>
  </div>;
};

export default PropertyDetails;

export async function getServerSideProps({params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        }
    }
}

