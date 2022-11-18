import React, { useState, useEffect } from 'react';
import Clue from '../components/Clue/Clue';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateCategoryForm from '../components/CreateCategoryForm/CreateCategoryForm';


const CreateCategory = ({ user }) => {
    return (
        <div>
            <CreateCategoryForm user={ user }/>
        </div>
    )
}

export default CreateCategory;