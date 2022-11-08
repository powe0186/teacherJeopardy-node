import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';


const SignInButton = ({ user, handleLogout }) => {

    useEffect(() => {
        /* global google */
        google.accounts.id.renderButton(
            document.getElementById("navSignIn"),
            { theme: "outline", size: "large" }
        );
    }, [user]);


    
    // Render a login button if there is no user stored or 
    // a logout button with the user's picture if there is a user stored
    
    if (user.name) {
        return (
            <Button onClick={handleLogout} style={{backgroundColor: '010197'}}>
            <img id="user-img" src={user.picture} style={{width: '2em', marginRight: '5px'}}></img>
            {/* Sign Out */}
            Sign Out
            </Button>
        )
    } else {
        return (
            <div id="navSignIn" >sign In</div>
        )
    }

}

export default SignInButton;