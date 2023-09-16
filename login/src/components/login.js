import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

function Login()
    {
        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 className='text-center' id='header1'>Login Form</h1>
        <Form.Label htmlFor='inputlogin1'>Login</Form.Label>
        <Form.Control type="text" id="inputlogin1" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid login.
          </Form.Control.Feedback>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        required
      />
      <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <br/>
      <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />

        </div>
      ))}

      </Form>
      <br/>
    <Stack direction='horizontal'  >
<div className='ms-auto'>    <Button  variant="outline-success" size='md' type='submit' >Login</Button>{' '}</div>
<div className='p-2'>    <Button variant="outline-secondary" size='md'>Cancel</Button>{' '}</div>
      
        </Stack>    
        </Form>
    )
};



export default Login;