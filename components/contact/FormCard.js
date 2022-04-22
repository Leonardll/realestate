import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
export const FormCard = ({ 
  inputData, 
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  isValid,
  errors, }) => (
  <div className="col-lg-8 mb-lg-0 m-4 w-100">
        <Form noValidate onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
          {inputData.map((item) => (
            <InputGroup hasValidation className="mb-3" key={item.id}>
              { console.log(values)}
              <InputGroup.Text id={item.id}>{item.icon}</InputGroup.Text>
              <Form.Control
                //values={values.item.id[0]}
                name={item.id}
                type={item.type}
                placeholder={item.placeholder}
                aria-label={item.ariaLabel}
                aria-describedby={item.ariaDescribedby}
                onChange={item.fn}
                />
                <Form.Control.Feedback type="invalid">

                </Form.Control.Feedback>
            </InputGroup>
          ))}
          </div>

          <div className="text-center ">
            <button
              className="btn btn-lg btn-hogar2 text-light mb-3"
              type="submit"
            >
              Send
            </button>
          </div>
        </Form>
    
    </div>
  
);
