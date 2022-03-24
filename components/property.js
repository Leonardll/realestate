import Link from "next/link";


const Properties = () => (
  <div className="section d-flex justify-content-center">
    <div className="container property">
    <div className="mt-2 d-flex justify-content-center">
    <h1 className="my-3 fw-bold text-center" id="properties">
    Properties
    </h1>
    </div>
    <div className="row d-flex">

  <Link href="https://www.idealista.com/pro/unico-hogar/venta-viviendas/" passHref >
    <div className=" banner col-12 col-md-6 p-3 bg-success">
      <h3 className="text-center">Buy</h3>
    </div>
  </Link>
  
  
  <Link href="https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/" passHref >
    <div className=" banner col-12 col-md-6 p-3">
      <h3 className="text-center">Rent</h3>
    </div>
  </Link>
    </div>
  
    </div>
  </div>
);

export default Properties;
