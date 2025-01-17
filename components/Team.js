import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Cris from "../public/cris.jpg";
import Manu from "../public/manu.jpg";

export const Team = ({ teamText1 }) => {
  return (
    <div className="section" id="team">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <h1 className="my-4  text-capitalize">Team</h1>
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            //animate={{ opacity: 1, x:0}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            //viewport={{ once: true }}
            className="row g-4 d-flex flex-row p-5"
          >
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="h-100 text-center">
                <Image
                  src={Manu}
                  height={300}
                  width={250}
                  alt="team-member"
                  objectFit="cover"
                  className="card-img-top img-fluid mx-auto "
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="team-card">
                <h4 className="text-center text-hogar2 text-lg-start">
                  Emanuele Marin
                </h4>
                <p className="lead">{teamText1}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          //animate={{ opacity: 1, x:[100,0]}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="row d-none d-flex flex-row-reverse p-3"
        >
          <div className="col-lg-4 flex-row-reverse justify-content-center">
            <div className="h-100 text-center">
              <Image
                src={Cris}
                objectFit="cover"
                height={300}
                width={250}
                alt="team-member"
                className="card-img-top img-fluid mx-auto"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-row-reverse">
            <div className="team-card">
              <h4 className=" text-center text-hogar2 text-lg-start">
                Cristian Arcas
              </h4>
              <p className="lead">
                Le define su carácter extrovertido y entusiasta, gracias al cual
                ha logrado siempre que sus relaciones interpersonales sean su
                punto fuerte. Es un experto y enamorado de su trabajo, junto a
                su lado más humano, consigue dar lo mejor de sí para que sus
                clientes queden siempre satisfechos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
