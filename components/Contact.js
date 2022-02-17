import { React, useState,useCallback } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { AiFillMail } from "react-icons/ai";
import { FaTag, FaUser, FaPencilAlt } from "react-icons/fa";

const containerStyle = {
    width: 'auto',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
const  MyComponent= () => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.googleMapsApiKey,
      version: "weekly",
      libraries: []                                                                                                                                                                                                                           
    })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5 mb-lg-0 mb-4 w-auto">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center form-header text-center accent-1">
                <h3 className="mt-2">
                  <i>
                    <AiFillMail className="mb-1" />
                  </i>
                  Write to us:
                </h3>
              </div>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaUser />
                  </InputGroup.Text>
                  <FormControl
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    aria-label="firstname"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon2">
                    <FaUser />
                  </InputGroup.Text>
                  <FormControl
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    aria-label="lastName"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    <AiFillMail />
                  </InputGroup.Text>
                  <FormControl
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    aria-label="email"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="subjet" type="text">
                    <FaTag />
                  </InputGroup.Text>
                  <FormControl
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    aria-label="subject"
                    aria-describedby="basic-addon4"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="message" type="text">
                    <FaPencilAlt />
                  </InputGroup.Text>
                  <FormControl
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    aria-label="your message"
                    as="textarea"
                    aria-describedby="basic-addon4"
                  />
                </InputGroup>
                <div className="text-center">
                  <button className="btn btn-light-blue mb-3" type="submit">
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
           <MyComponent/>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-map-marker-alt"></i>
              </a>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </div>
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-phone"></i>
              </a>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </div>
            <div className="col-md-4">
              <a className="btn-floating blue accent-1">
                <i className="fas fa-envelope"></i>
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
