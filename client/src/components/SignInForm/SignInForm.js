import React, {useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUpForm = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value
        }));
    }

    const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value
        }));
    }

    return (
       

        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" placeholder="name@example.com" value={values.email} onChange={handleEmailInputChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id ="password" placeholder="password" value={values.password} onChange={handlePasswordInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h2 style={{ marginTop: '50px'}}>Not Registered yet?</h2>
            <Button variant="primary" size="lg">
                Create Account
            </Button>
        </div>

    );
}


export default SignUpForm;