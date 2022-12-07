import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateGameForm = ({ user }) => {

    const [gameData, setGameData] = useState({
        subject_id: 1,
        gameName: '',
        isPublic: true,
        subjectId: 1,
        category1: {
            name: '',
            clue1: { clueText: '', correctResponse: '' },
            clue2: { clueText: '', correctResponse: '' },
            clue3: { clueText: '', correctResponse: '' },
            clue4: { clueText: '', correctResponse: '' }
        },
        category2: {
            name: '',
            clue1: { clueText: '', correctResponse: '' },
            clue2: { clueText: '', correctResponse: '' },
            clue3: { clueText: '', correctResponse: '' },
            clue4: { clueText: '', correctResponse: '' }
        },
        category3: {
            name: '',
            clue1: { clueText: '', correctResponse: '' },
            clue2: { clueText: '', correctResponse: '' },
            clue3: { clueText: '', correctResponse: '' },
            clue4: { clueText: '', correctResponse: '' }
        },
        category4: {
            name: '',
            clue1: { clueText: '', correctResponse: '' },
            clue2: { clueText: '', correctResponse: '' },
            clue3: { clueText: '', correctResponse: '' },
            clue4: { clueText: '', correctResponse: '' }
        }
    });

    const handleGameNameChange = (event) => {
        setGameData((gameData) => ({
            ...gameData,
            gameName: event.target.value,
        }));
    }

    const handleSubjectInputChange = (event) => {
        setGameData((gameData) => ({
            ...gameData,
            subject_id: event.target.value
        }));
    }

    const handleQuestionChange = (event) => {
        const clueNum = event.target.getAttribute("data-clue");
        const categoryNum = event.target.getAttribute("data-categoryNum");
        const part = event.target.getAttribute("data-part");
        setGameData((gameData) => ({
            ...gameData,
            [categoryNum]: {
                ...gameData[categoryNum],
                [clueNum]: {
                    ...gameData[categoryNum][clueNum],
                    [part]: event.target.value
                }
            }
        }));
    }

    const handleCategoryNameChange = (event) => {
        const categoryNum = event.target.getAttribute("data-categoryNum");
        setGameData((gameData) => ({
            ...gameData,
            [categoryNum]: {
                ...gameData[categoryNum],
                name: event.target.value,
            }
        }));
    }

    const handleGameSubmit = async (event) => {
        await event.preventDefault();
        let cat1 = await submitCategory(gameData.category1);
        let cat2 = await submitCategory(gameData.category2);
        let cat3 = await submitCategory(gameData.category3);
        let cat4 = await submitCategory(gameData.category4);
        console.log("category1 :", cat1);
        console.log("category2 :", cat2);

        //create new category in database:
        await fetch("http://localhost:3001/api/games", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: gameData.gameName,
                category1: cat1.id,
                category2: cat2.id,
                category3: cat3.id,
                category4: cat4.id,
                userId: user.user_id
            })
        })
    }


    //trying to write method - input is the clue data for all 4 clues.
    //Returns the data we get back so that we can get the category ID.
    const submitCategory = async (categoryData) => {
        let returnedCatData;
        return await fetch("http://localhost:3001/api/Clues/bulk", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clues: [
                    {
                        ...categoryData.clue1,
                        userId: user.user_id,
                        isPublic: gameData.isPublic,
                        subjectId: gameData.subject_id
                    },
                    {
                        ...categoryData.clue2,
                        userId: user.user_id,
                        isPublic: gameData.isPublic,
                        subjectId: gameData.subject_id
                    },
                    {
                        ...categoryData.clue3,
                        userId: user.user_id,
                        isPublic: gameData.isPublic,
                        subjectId: gameData.subject_id
                    },
                    {
                        ...categoryData.clue4,
                        userId: user.user_id,
                        isPublic: gameData.isPublic,
                        subjectId: gameData.subject_id
                    }
                ]
            })
        })
            .then(response => response.json())
            .then((data) => 
                fetch("http://localhost:3001/api/categories", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        categoryName: categoryData.name,
                        clue1Id: data[0].id,
                        clue2Id: data[1].id,
                        clue3Id: data[2].id,
                        clue4Id: data[3].id,
                        userId: user.user_id
                    })
                })
                    .then(response => response.json())
                    .catch((error) => console.log(error))
            )
            .catch((err) => console.log(err))
    }


    if (user.user_id) {
        return (
            <div>
                <Form>
                    <Container>
                        <Form.Group className="mb-3 clue-form" >
                            <Form.Control type="text" placeholder="Game Name" value={gameData.gameName} onChange={handleGameNameChange} />
                        </Form.Group>
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
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category1" value={gameData.category1.name} onChange={handleCategoryNameChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue1.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue2.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue3.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue4.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category2" value={gameData.category2.name} onChange={handleCategoryNameChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue1.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue2.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue3.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue4.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category3" value={gameData.category3.name} onChange={handleCategoryNameChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue1.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue2.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue3.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue4.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category4" value={gameData.category4.name} onChange={handleCategoryNameChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue1.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue2.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue3.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue4.correctResponse} onChange={handleQuestionChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button className="submit-button" variant="primary" type="submit" onClick={handleGameSubmit}>
                            CREATE GAME
                        </Button>
                    </Container>
                </Form>

            </div>
        )
    } else {
        return (
            <h1>Please Log in to create a game.</h1>
        )
    }
}

export default CreateGameForm;