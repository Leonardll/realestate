import { React, useState, useCallback } from "react";
import {MyComponent} from '../contact/Map'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { AiFillMail } from "react-icons/ai";
import {
  FaTag,
  FaUser,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";




const ContactForm = () => {
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
      <div className="row justify-content-center">
        <div className="col-lg-5 mb-lg-0 mb-4 w-auto">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center form-header text-center accent-1">
                <h3 className="mt-2 text-light">
                  <i>
                    <AiFillMail fill="white" className="mb-1" />
                  </i>
                  Write to us:
                </h3>
              </div>
              <Form onSubmit={handleSubmit}>
                {inputData.map((item) => (
                  <InputGroup className="mb-3" key={item.id}>
                    <InputGroup.Text id={item.id}>{item.icon}</InputGroup.Text>
                    <FormControl
                      id={item.id}
                      type={item.type}
                      placeholder={item.placeholder}
                      aria-label={item.ariaLabel}
                      aria-describedby={item.ariaDescribedby}
                      onChange={item.fn}
                    />
                  </InputGroup>
                ))}

                <div className="text-center ">
                  <button className="btn btn-light-blue text-light mb-3" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
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
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </div>
            <div className="col-md-4">
              <a className="btn rounded-pill btn-info accent-1">
                <FaPhone fill="white" />
              </a>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </div>
            <div className="col-md-4">
              <a className="btn rounded-pill btn-info accent-1">
                <FaEnvelope fill="white" />
              </a>
              <p>info@gmail.com</p>
              <p className="mb-0">sale@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="section my-5">
      <div className=" d-flex flex-wrap justify-content-center">
        <h1 className="font-weight-bold text-center my-5">Contact</h1>
      </div>
      <ContactForm />
    </div>
  );
};
