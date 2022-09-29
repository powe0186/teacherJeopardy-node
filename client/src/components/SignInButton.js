import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const SignInButton = ({ user }) => {

    useEffect(() => {
        /* global google */
        google.accounts.id.renderButton(
            document.getElementById("navSignIn"),
            { theme: "outline", size: "large" }
        );
    }, []);

    console.log("user has made it?:");
    console.log(user);
    
    if (user.name) {
        return (
            <div>Sign Out</div>
        )
    } else {
        return (
            <div id="navSignIn">sign In</div>
        )
    }

}

export default SignInButton;