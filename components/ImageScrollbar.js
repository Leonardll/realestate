import { useContext } from "react";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel'

import Image from "next/image";






const ImageScrollbar = ({data}) => {
    return (
<Carousel variant="dark">
    {
    data.map((item) =>  (
        <Carousel.Item key={item.id}  >
    <Image
      className="d-block w-100"
      src={item.url}
      alt="property"
      width={1000}
      height={500}
      layout="responsive"
      placeholder="blur" 
      blurDataURL={item.url}
      sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
    />
    
  </Carousel.Item>
    ))
    }
</Carousel>
    )
}
// const LeftArrow = () => {
//     const { isLastItemVisible, scrollPrev } = useContext(VisibilityContext)
//   return ( 
//         <div className="d-flex justify-content-center align-items-center mr-1">
//             <FaArrowAltCircleLeft 
//             onClick={() => scrollPrev()}
//             className="fs-1"
//             cursor="pointer"
//             //d={['none','none','none','block']}
//             //disabled={isLastItemVisible}
//             />
//         </div>
//         )
// };

// const RightArrow = () => {
//     const {  scrollNext } = useContext(VisibilityContext)
//     return ( 
//         <div className="d-flex justify-content-center align-items-center ml-1">
//             <FaArrowAltCircleRight 
//             onClick={() => {
//                 scrollNext()
//                 console.log("clicked")}}
//             className="fs-1"
//             cursor="pointer"
//             d={['none','none','none','block']}
//             />
//         </div>
//         )
// };


// const ImageScrollbar = ({ data }) => (
//    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
//       {data.map((item) => (
//           <div 
//           className ="overflow-hidden p-1" 
//           style={{
//             minHeight: "50vh",
//             position: "relative",
//             width: "60vw",
//             height: "auto"
//           }}
//           itemID={item.id} key={item.id}>
//               <Image 
//               placeholder="blur" 
//               blurDataURL={item.url}
//               width={1000}
//               height={500} 
//               alt="property"
//               src={item.url}
//               sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
//           </div>
//       ))} 
//    </ScrollMenu>
// );



export default ImageScrollbar;
