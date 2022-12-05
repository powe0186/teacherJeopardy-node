import React, { useState, useEffect } from 'react';
import Clue from '../components/Clue/Clue';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateGameForm from '../components/CreateGameForm/CreateGameForm';


const CreateGame = ({ user }) => {
        return (
            <div style={{ backgroundColor: "blue", height: "100vh" }}>
                <CreateGameForm user={user} />
            </div>
        )
}

export default CreateGame;