import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateCategoryForm = ({ user }) => {

    const [values, setValues] = useState({
        clue1: {},
        clue2: {},
        clue3: {},
        clue4: {}
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

    async function handleNewCategorySubmit(event) {
        await event.preventDefault();
        let clue1Id;
        let clue2Id;
        let clue3Id;
        let clue4Id;

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
                        subject_id: values.subject_id
                    },
                    { 
                        ...values.clue2,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subject_id: values.subject_id
                    },
                    { 
                        ...values.clue3,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subject_id: values.subject_id
                    },
                    { 
                        ...values.clue4,
                        userId: user.user_id,
                        isPublic: values.isPublic,
                        subject_id: values.subject_id
                    }
                ]
            })
        })
            .then((response) => {
                console.log('response: ', response.body);
                return response.json();
            })
            .then(data => console.log('data from response: ', data))
            .catch((err) => console.log(err))
    } 

    return (

        <div>
            <Form>
                <div className="clue-form">
                    <Form.Group className="mb-3" >
                        <Form.Label>Clue Text - User: {user.user_id}</Form.Label>
                        <Form.Control type="text" placeholder="clue text" value={values.clue1.clueText} onChange={clue1TextChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correct Response</Form.Label>
                        <Form.Control type="text" placeholder="Correct Response" value={values.clue1.correctResponse} onChange={clue1ResponseChange} />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <Form.Label>Clue Text - User: {user.user_id}</Form.Label>
                        <Form.Control type="text" placeholder="clue text" value={values.clue2.clueText} onChange={clue2TextChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correct Response</Form.Label>
                        <Form.Control type="text" placeholder="Correct Response" value={values.clue2.correctResponse} onChange={clue2ResponseChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Clue Text - User: {user.user_id}</Form.Label>
                        <Form.Control type="text" placeholder="clue text" value={values.clue3.clueText} onChange={clue3TextChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correct Response</Form.Label>
                        <Form.Control type="text" placeholder="Correct Response" value={values.clue3.correctResponse} onChange={clue3ResponseChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Clue Text - User: {user.user_id}</Form.Label>
                        <Form.Control type="text" placeholder="clue text" value={values.clue4.clueText} onChange={clue4TextChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correct Response</Form.Label>
                        <Form.Control type="text" placeholder="Correct Response" value={values.clue4.correctResponse} onChange={clue4ResponseChange} />
                    </Form.Group>


                     

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

                    <Form.Select aria-label="Default select example" onChange={handleisPublicInputChange}>
                        <option value="false">private</option>
                        <option value="true">public</option>
                    </Form.Select> 
                </div>

                <Button variant="primary" type="submit" onClick={handleNewCategorySubmit}>
                    Create Category
                </Button>
            </Form>
        </div>

    );
}



export default CreateCategoryForm;