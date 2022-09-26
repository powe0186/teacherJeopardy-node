import React from 'react';
import Card from 'react-bootstrap/Card';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import SignInForm from '../components/SignInForm/SignInForm';

const SignIn = () => {
    return (
        <Card>
            <Card.Body style={{ width: '25%', margin: 'auto' }}>
                <h1>Sign up for a new account.</h1>
                <SignUpForm />
            </Card.Body>
        </Card>
    );
}

export default SignIn;