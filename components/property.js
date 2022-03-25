import Link from "next/link";


const Properties = () => (
  <div className="section">
    <div className="container property">
    <div className="d-flex justify-content-center">
    <h1 className="my-4 fw-bold text-center" id="properties">
    Properties
    </h1>
    </div>
    <div className="row d-flex">

  <Link href="https://www.idealista.com/pro/unico-hogar/venta-viviendas/" passHref >
    <div className=" banner d-flex align-items-center justify-content-center col-12 col-md-6 p-3">
      <h3 className="text-center text-capitalize text-hogar2">Buy</h3>
    </div>
  </Link>
  
  
  <Link href="https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/" passHref >
    <div className=" banner d-flex align-items-center justify-content-center col-12 col-md-6 p-3 bg-white">
      <h3 className="text-center text-capitalize text-hogar2">Rent</h3>
    </div>
  </Link>
    </div>
  
    </div>
  </div>
);

export default Properties;
