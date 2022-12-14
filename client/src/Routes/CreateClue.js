import React, { useState, useEffect } from 'react';
import Clue from '../components/Clue/Clue';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateClueForm from '../components/CreateClueForm/CreateClueForm';


const CreateClue = ({ user }) => {
    return (
        <div>
            <CreateClueForm user={ user } />
        </div>
    )
}

export default CreateClue;