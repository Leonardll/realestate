import React from "react";
import Image from "next/image";
import Dummy from "../assets/images/dummy.png";
import Cris from "../assets/images/DSC_8245.JPG";
import Manu from "../assets/images/IMG-20220310.jpg";

export const Team = () => {
  return (
    <div className="section my-2">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h1 className="my-3 fw-bold" id="team">
            Team
          </h1>
        </div>
        <div className="row g-4 d-flex justify-content-evenly p-3">
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

              <h4>Emanuele Morin</h4>
              <p className="text-mute"></p>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="h-100 text-center">
              <Image
                src={Cris}
                objectFit="cover"
                height={300}
                width={250}
                alt="..."
                className="card-img-top img-fluid mx-auto"
              />

              <h4>Cristian Arcas</h4>
              <p className="text-mute text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
