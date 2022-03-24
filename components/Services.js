import Image from "next/image";
import Link from "next/link"
import React from "react";
import Hands from "../assets/images/hands.jpg";
import Couple from "../assets/images/couple.jpg";

export const Services = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 className="my-4 fw-bold" id="services">
            Services
          </h1>
        </div>
        <div className="row d-flex justify-content-between">
          <Link href={'/ourServices/conciergerie'} passHref>
          <div className="col-12 col-md-6 p-3">
            <Image
              className="card-img-top img-fluid"
              src={Hands}
              loader={myLoader}
              layout="responsive"
              objectFit="cover"
              fill="cover"
              height={300}
              width={500}
              alt="bell"
            />
            <div className="p-3 text-center text-capitalize">
              <h3>conciergerie</h3>
            </div>
          </div>
          </Link>
          <Link href={'/ourServices/property-management'} passHref>
          <div className="col-12 col-md-6 p-3">
            <Image
              className="card-img-top img-fluid"
              src={Couple}
              loader={myLoader}
              layout="responsive"
              objectFit="cover"
              //fill='cover'
              height={300}
              width={500}
              alt="bell"
            />
            <div className="p-3 ">
              <h3 className="text-center text-capitalize">Property Management</h3>
            </div>
            <div className="card-text"></div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
