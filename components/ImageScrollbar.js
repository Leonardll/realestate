import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import Image from "next/image";

const myLoader2 = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${
    quality || 75
  }`;
};
const ImageScrollbar = ({ data }) => {
  return (
    <div className="container">
      <Carousel variant="dark">
        {data.image.map((item) => (
          <Carousel.Item key={item.url}>
            <Image
              loader={myLoader2}
              className="d-block w-100 img-fluid"
              src={item.url}
              alt="property"
              width='100%'
              height='100%'
              layout="responsive"
              objectFit="contain"
              objectPosition="50% 50%"
              placeholder="blur"
              blurDataURL={item.url}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


export default ImageScrollbar;
