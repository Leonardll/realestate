import Image from "next/image";
import React from "react";
import Hands from "../assets/images/hands.jpg";
import Couple from "../assets/images/couple.jpg";

export const Services = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="section my-2">
      <div className="container">
        <div className="mt-2 d-flex justify-content-center">
          <h1 className="my-3 fw-bold" id="services">
            Services
          </h1>
        </div>
        <div className="row d-flex justify-content-between">
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
            <div className="p-3 text-center text-capitalize">
              <h3>real estate</h3>
            </div>
            <div className="card-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
