import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
export const FormCard = ({ AiFillMail, inputData, handleSubmit }) => (
  <div className="col-lg-8 mb-lg-0 m-4 w-100">
   
     
        <div className="d-flex align-items-center justify-content-center form-header text-center accent-1">
          <h3 className="mt-2 text-light">
            <i>
              <AiFillMail fill="white" className="mb-1" />
            </i>
            Write to us {' '}:
          </h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">

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
          </div>

          <div className="text-center ">
            <button
              className="btn btn-light-blue text-light mb-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
    
    </div>
  
);
