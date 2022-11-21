import React, { useState, useEffect } from 'react';
import Clue from '../components/Clue/Clue';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateCategoryForm from '../components/CreateCategoryForm/CreateCategoryForm';


const CreateGame = ({ user }) => {
    return (
        <div>
            <p>Create Game for {user.name}</p>
        </div>
    )
}

export default CreateGame;