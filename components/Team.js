import React from "react";
import Image from "next/image";
import Dummy from "../assets/images/dummy.png";
import Cris from "../assets/images/cris.jpg";
import Manu from "../assets/images/manu.jpg";

export const Team = () => {
  return (
    <div className="section my-2">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h1 className="my-3 fw-bold text-capitalize" id="team">
            Team
          </h1>
        </div>
        <div className="row g-4 d-flex flex-row p-3">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="h-100 text-center">
              <Image
                src={Manu}
                height={300}
                width={250}
                alt="..."
                objectFit="cover"
                className="card-img-top img-fluid mx-auto "
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="team-card">
              <h4 className="text-center text-lg-start">Emanuele Marin</h4>
              <p className="lead">
                Le caracteriza su implicación y su escucha activa hacia las
                necesidades de sus clientes. Te atenderá siempre con una
                sonrisa. Tiene don de gentes y una capacidad de comunicación
                fuera de lo común. ¡Y en varios idiomas! Le gustan los retos y
                superarse en cada momento. Para ti, siempre aquí y ahora.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row-reverse">
          <div className="col-lg-4 flex-row-reverse justify-content-center">
            <div className="h-100 text-center">
              <Image
                src={Cris}
                objectFit="cover"
                height={300}
                width={250}
                alt="..."
                className="card-img-top img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-row-reverse">
            <div className="team-card">
              <h4 className=" text-center text-lg-start">Cristian Arcas</h4>
              <p className="lead">
                Le define su carácter extrovertido y entusiasta, gracias al cual
                ha logrado siempre que sus relaciones interpersonales sean su
                punto fuerte. Es un experto y enamorado de su trabajo, junto a
                su lado más humano, consigue dar lo mejor de sí para que sus
                clientes queden siempre satisfechos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
