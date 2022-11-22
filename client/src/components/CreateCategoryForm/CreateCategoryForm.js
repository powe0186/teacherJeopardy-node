import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CreateCategoryForm.css';



const CreateCategoryForm = ({ user }) => {

    const [values, setValues] = useState({
        categoryName: '',
        clue1: {},
        clue2: {},
        clue3: {},
        clue4: {},
    });

    const clue1TextChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue1: {
                ...values.clue1,
                clueText: event.target.value
            }
        }));
    }

    const clue2TextChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue2: {
                ...values.clue2,
                clueText: event.target.value
            }
        }));
    }

    const clue3TextChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue3: {
                ...values.clue3,
                clueText: event.target.value
            }
        }));
    }

    const clue4TextChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue4: {
                ...values.clue4,
                clueText: event.target.value
            }
        }));
    }

    const clue1ResponseChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue1: {
                ...values.clue1,
                correctResponse: event.target.value
            }
        }));
    }

    const clue2ResponseChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue2: {
                ...values.clue2,
                correctResponse: event.target.value
            }
        }));
    }

    const clue3ResponseChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue3: {
                ...values.clue3,
                correctResponse: event.target.value
            }
        }));
    }

    const clue4ResponseChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clue4: {
                ...values.clue4,
                correctResponse: event.target.value
            }
        }));
    }

    const handleSubjectInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            subject_id: event.target.value
        }));
    }

    const handleisPublicInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            isPublic: event.target.value
        }));
    }

    const categoryNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            categoryName: event.target.value
        }));
    }

    async function handleNewCategorySubmit(event) {
        await event.preventDefault();

        await fetch("http://localhost:3001/api/Clues/bulk", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clues: [
                    {
                        ...values.clue1,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subjectId: values.subject_id
                    },
                    {
                        ...values.clue2,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subjectId: values.subject_id
                    },
                    {
                        ...values.clue3,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subjectId: values.subject_id
                    },
                    {
                        ...values.clue4,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subjectId: values.subject_id
                    }
                ]
            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log('data from response: ', data);
                fetch("http://localhost:3001/api/categories", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        categoryName: values.categoryName,
                        clue1Id: data[0].id,
                        clue2Id: data[1].id,
                        clue3Id: data[2].id,
                        clue4Id: data[3].id,
                        userId: user.user_id
                    })
                })
                .then(response => response.json())
                .then(data => console.log('category made: ', data))
                .catch((error) => console.log(error))
            })
            .catch((err) => console.log(err))
    }

    if (user.user_id) {
        return (

            <div className="category-form">
                <Form>
                    <Form.Group className="mb-3 clue-form" >
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Category Name" value={values.categoryName} onChange={categoryNameChange} />
                    </Form.Group>
                    <div className="clue-form">


                        <Form.Group className="mb-3" >
                            <Form.Label>Clue #1 Text </Form.Label>
                            <Form.Control type="text" placeholder="clue text" value={values.clue1.clueText} onChange={clue1TextChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correct Response</Form.Label>
                            <Form.Control type="text" placeholder="Correct Response" value={values.clue1.correctResponse} onChange={clue1ResponseChange} />
                        </Form.Group>
                    </div>
                    <div className="clue-form">
                        <Form.Group className="mb-3" >
                            <Form.Label>Clue #2 Text </Form.Label>
                            <Form.Control type="text" placeholder="clue text" value={values.clue2.clueText} onChange={clue2TextChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correct Response</Form.Label>
                            <Form.Control type="text" placeholder="Correct Response" value={values.clue2.correctResponse} onChange={clue2ResponseChange} />
                        </Form.Group>
                    </div>
                    <div className="clue-form">
                        <Form.Group className="mb-3" >
                            <Form.Label>Clue #3 Text </Form.Label>
                            <Form.Control type="text" placeholder="clue text" value={values.clue3.clueText} onChange={clue3TextChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correct Response</Form.Label>
                            <Form.Control type="text" placeholder="Correct Response" value={values.clue3.correctResponse} onChange={clue3ResponseChange} />
                        </Form.Group>
                    </div>
                    <div className="clue-form">
                        <Form.Group className="mb-3" >
                            <Form.Label>Clue #4 Text </Form.Label>
                            <Form.Control type="text" placeholder="clue text" value={values.clue4.clueText} onChange={clue4TextChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Correct Response</Form.Label>
                            <Form.Control type="text" placeholder="Correct Response" value={values.clue4.correctResponse} onChange={clue4ResponseChange} />
                        </Form.Group>
                    </div>


                    <div className="clue-form">
                        <Form.Select onChange={handleSubjectInputChange}>
                            <option>Choose Subject</option>
                            <option value="1">Mathematics</option>
                            <option value="2">Science</option>
                            <option value="3">Tech Ed</option>
                            <option value="4">Reading</option>
                            <option value="5">Language Arts</option>
                            <option value="6">Music</option>
                            <option value="7">Family & Consumer Sciences</option>
                            <option value="8">Physical Education</option>
                            <option value="9">Other</option>
                        </Form.Select>
                    </div>
                    <div className="clue-form">
                        <Form.Select aria-label="Default select example" onChange={handleisPublicInputChange}>
                            <option value="false">private</option>
                            <option value="true">public</option>
                        </Form.Select>
                    </div>

                    <Button className="submit-button" variant="primary" type="submit" onClick={handleNewCategorySubmit}>
                        Create Category
                    </Button>
                </Form>
            </div>

        );

    } else {
        return (
            <h1>Please login before creating a category.</h1>
        )
    }
}



export default CreateCategoryForm;