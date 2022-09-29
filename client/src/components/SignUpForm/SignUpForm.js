import React, { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUpForm = () => {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    useEffect(() => {
        /* global google */
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    const checkPasswordMatch = () => {
        if (password === confirmPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    }

    const handleEmailChange = (event) => {
        event.persist();
        setEmail(event.target.value);
    }

    const handleUserNameChange = (event) => {
        event.persist();
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.persist();
        setPassword(event.target.value);
        checkPasswordMatch();

    }

    const handleConfirmPasswordChange = (event) => {
        event.persist();
        setConfirmPassword(event.target.value);
        checkPasswordMatch();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit is clicked");
        fetch('https://localhost:7175/teacher', {
            Method: 'POST',
            Body: JSON.stringify({
                email,
                userName,
                password
            })
        })
            .then((res) => console.log("response: ", res))
            .catch((err) => console.log("error: ", err))
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="SuperDave999" value={userName} onChange={handleUserNameChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <div id="signInDiv"></div>
        </Form>

    );
}


export default SignUpForm;