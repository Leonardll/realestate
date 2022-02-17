import {React,useState} from 'react'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
import {AiFillMail} from 'react-icons/ai'
import {FaTag,FaUser, FaPencilAlt} from 'react-icons/fa'
const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    
 async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            subject,
            message,
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        });
        console.log(data);
    }
    

  return (

    <div className='container'>
        <div className="row">
            <div className="col-lg-5 mb-lg-0 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center form-header text-center accent-1">
                        <h3 className='mt-2'><i><AiFillMail className='mb-1'/></i>Write to us:</h3>
                        </div>
                       <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                        <InputGroup.Text 
                        
                        id="basic-addon1"
                        >
                            <FaUser/>
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
                        <InputGroup.Text 
                        id="basic-addon2"
                       >
                            <FaUser/>
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
                        <InputGroup.Text 
                        id="basic-addon3"
                        >
                            <AiFillMail/>
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
                        <InputGroup.Text 
                        id="subjet"
                        type="text"
                        >
                        <FaTag/>
                        </InputGroup.Text>
                        <FormControl
                        
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        aria-label="subject"
                        aria-describedby="basic-addon4"
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text 
                        id="message"
                        type="text"
                        >
                            <FaPencilAlt/>
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
                    <button className="btn btn-light-blue mb-3" type="submit">Submit</button>
                    </div>
                    </Form>
                    </div>
                   
                   
                </div>
               
            </div>
        </div>
    </div>
  )
}

export const Contact = () => {
  return (
    <div className='section my-5'>
    <div className=' d-flex flex-wrap justify-content-center'>
    <h1 className='font-weight-bold text-center my-5'>Contact</h1>
    </div>
    <ContactForm />
</div>
  )
}
