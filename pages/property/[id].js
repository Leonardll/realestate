import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi, getDetails } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
const PropertyDetails = ({
  propertyDetails: {
    id,
    address,
    contact,
    operation,
    descriptions,
    links,
    images,
    features,
  },
}) => {
  return (
    <div className=" section m-auto p-3">
      {images && <ImageScrollbar data={images} />}
      <div className="container">

      <div className="w-100 ">
        <div className="d-flex pt-1 align-items-center align-content-end">
          <div className="pe-2 text-success">
            {/* {isVerified && <GoVerified />} */}
          </div>
          <p className="card-text fs-6 pt-1 fw-bold d-flex">
            EUR {millify(operation.price)}
          </p>
          <div className="ps-5 d-flex flex-end">
            <span>
              <Image
                className="rounded-circle img-fluid"
                height={40}
                width={70}
                alt=""
                src={Logo}
              />
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="px-1">
            {features.bedrooms}{" "}
            <i>
              <FaBed />
            </i>
          </span>
          <br />
          <span className="px-1">
            {features.bathrooms}{" "}
            <i>
              <FaBath />
            </i>
          </span>
          <br />
          <span className="px-1">
            {features.constructedArea} sqft
            <i>
              {" "}
              <BsGridFill />
            </i>
          </span>
        </div>
        <p className="text mb-2 fs-4 fw-bold text-capitalize pt-1">{features.$.type}</p>
        <p className="text mb-2 lh-lg  pt-1">
          {descriptions.description[0].comment}
        </p>
      </div>
      <div className="div">
        {features.length && <p className="fs-3 fw-bold">Amenities</p>}
        <div className="d-flex flex-wrap">
          {Object.keys(features).map((item, index) => {
            console.log("type", item);
            console.log(features[item]);
            
            return (
              <p
              key={item}
              className="fw-bold bg-light fs-6 text-primary m-1 p-2"
              >{`${[item]} : ${features[item]}`}</p>
              );
            })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const data = await getDetails(`${baseUrl}/api/properties/details/${id}`);
  console.log(id);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
