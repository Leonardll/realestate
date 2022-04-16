import Link from "next/link";
import {motion} from "framer-motion"

const propertyData = [
  {
    id:"buy",
    title:"buy",
    href:"https://www.idealista.com/pro/unico-hogar/venta-viviendas/"
  },
  {
    id:"rent",
    title:"rent",
    href:"https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/"
  },
]

const easing = [0.6, -0.05, 0.01, 0.99];
  


const Properties = () => (
  <div className="section">
    <div className="container property">
    <div className="d-flex justify-content-center">
    <h1 className="my-4 text-center" id="properties">
    Properties
    </h1>
    </div>
    <div className="row d-flex">
    {
      propertyData.map((item) => {
        return (

  <Link href={item.href} passHref key={item.id} >
    <motion.div 
    whileHover={{ scale: 1.1, originX: 0, transition:3 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', duration: 2, ease:easing, stiffness: 300}}
    className=" banner shadow-lg d-flex align-items-center justify-content-center col-12 col-md-6 p-3">
      <h3 className="text-center text-capitalize text-hogar2">{item.title}</h3>
    </motion.div>
  </Link>
        )
      })
    }
    </div>
  
    </div>
  </div>
);

export default Properties;
