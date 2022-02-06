import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";



const PropertyDetails = ({propertyDetails:{price,rentFrequency,rooms, title, baths, area,agency,isVerified, description, type, purpose,furnishingStatus, amenities,photos }}) => {
  return <div className="mw-50% m-auto p-3">
      {photos && <ImageScrollbar data={photos} />}
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

