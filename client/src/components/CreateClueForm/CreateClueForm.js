import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateClueForm = ({ user }) => {

    const [values, setValues] = useState({});

    const handleClueTextInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            clueText: event.target.value
        }));
    }

    const handleCorrectResponseInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            correctResponse: event.target.value
        }));
    }

    const handleSubjectInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            subjectId: event.target.value
        }));
    }

    const handleisPublicInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            isPublic: event.target.value
        }));
    }

    async function handleNewClueSubmit(event) {
        await event.preventDefault();
        //seee if JSON.stringify is working:
        // clue data is working
    

        await fetch("http://localhost:3001/api/Clues", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...values,
                userId: user.user_id
            })
        })
            .then(response => response.json())
            .then(data => console.log('data from server: ', data))
            .catch((err) => console.log(err))

        console.log("Submitted!: ", values.subject)
    }

    return (


        <div>
            <Form>

                <Form.Group className="mb-3" >
                    <Form.Label>Clue Text - User: {user.user_id}</Form.Label>
                    <Form.Control type="text" id="email" placeholder="clue text" value={values.clueText} onChange={handleClueTextInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Correct Response</Form.Label>
                    <Form.Control type="text" placeholder="Correct Response" value={values.correctResponse} onChange={handleCorrectResponseInputChange} />
                </Form.Group>

                <Form.Select aria-label="Default select example" onChange={handleSubjectInputChange}>
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

                <Button variant="primary" type="submit" onClick={handleNewClueSubmit}>
                    Create Clue
                </Button>
            </Form>
        </div>

    );
}


export default CreateClueForm;