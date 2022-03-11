import { React, useState } from "react";
import { MyComponent } from '../contact/Map';
import { FormCard } from "./FormCard";
import { AiFillMail } from "react-icons/ai";
import {
  FaTag,
  FaUser,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

export const ContactForm  =  () => {
  
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputData = [
    {
      id: "firstName",
      icon: <FaUser />,
      type: "text",
      placeholder: "First Name",
      ariaLabel: "firstName",
      ariaDescribedby: "firstName",
      as: null,
      fn: (e) => setFirstName(e.target.value),
    },
    {
      id: "lastName",
      icon: <FaUser />,
      type: "text",
      placeholder: "Last Name",
      ariaLabel: "lastName",
      ariaDescribedby: "lastName",
      as: null,
      fn: (e) => setLastName(e.target.value),
    },
    {
      id: "email",
      icon: <AiFillMail />,
      type: "email",
      placeholder: "Your Email",
      ariaLabel: "email",
      ariaDescribedby: "email",
      as: null,
      fn: (e) => setEmail(e.target.value),
    },
    {
      id: "subject",
      icon: <FaTag />,
      type: "text",
      placeholder: "Subject",
      ariaLabel: "subject",
      ariaDescribedby: "subject",
      as: null,
      fn: (e) => setSubject(e.target.value),
    },
    {
      id: "message",
      icon: <FaPencilAlt />,
      type: "text",
      placeholder: "Your Message",
      ariaLabel: "firstName",
      ariaDescribedby: "firstName",
      as: "textarea",
      fn: (e) => setMessage(e.target.value),
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
  }

  return (
    <div className="container" id="contact">
      <div className="row mt-3 justify-content-center">
        <FormCard
          AiFillMail={AiFillMail}
          inputData={inputData}
          handleSubmit={handleSubmit} />
        <div className="col-lg-7 p-3">
          <div
            id="map-container-section"
            className="z-depth-1-half map-container-section mb-4"
          >
            <MyComponent />
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <a className="btn btn rounded-pill btn-info accent-1">
                <FaMapMarkerAlt fill="white" />
              </a>
              <p>Barcelona</p>
              <p className="mb-md-0">Spain</p>
            </div>
            <div className="col-md-4">
              <a className="btn rounded-pill btn-info accent-1">
                <FaPhone fill="white" />
              </a>
              <p>+ 34 606 279 778</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </div>
            <div className="col-md-4">
              <a className="btn rounded-pill btn-info accent-1">
                <FaEnvelope fill="white" />
              </a>
              <p>info@unicohogar.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
