import Image from "next/image";
import Link from "next/link"
import {motion} from "framer-motion"
import React from "react";
import Hands from "../assets/images/hands.jpg";
import Couple from "../assets/images/couple.jpg";

const serviceData = [
  {
    id:"conciergerie",
    title: "conciergerie",
    href:"/ourServices/conciergerie",
    image: Hands,
    alt:"hands"

  },
  {
    id:"realestate",
    title: "real estate",
    href:"/ourServices/realEstate",
    image: Couple,
    alt:"couple"

  },
]
const easing = [0.6, -0.05, 0.01, 0.99];

export const Services = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 className="my-4" id="services">
            Services
          </h1>
        </div>
        <div className="row d-flex justify-content-between">
         { 
          serviceData.map((item) => {
            return (

          <Link href={item.href} passHref key={item.id}>
          <motion.div
          whileHover={{ scale: 1.1, originX: 0, transition:3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', duration: 2, ease:easing, stiffness: 300}} 
          className="col-12 col-md-6 p-3 p-lg-5">
            <Image
              className="card-img-top img-fluid"
              src={item.image}
              loader={myLoader}
              layout="responsive"
              objectFit="cover"
              fill="cover"
              height={300}
              width={500}
              alt={item.alt}
            />
            <div className="p-3 text-center text-capitalize">
              <h3 className="service-heading">{item.title}</h3>
            </div>
          </motion.div>
          </Link>
            )
          })
          }
        </div>
      </div>
    </div>
  );
};
