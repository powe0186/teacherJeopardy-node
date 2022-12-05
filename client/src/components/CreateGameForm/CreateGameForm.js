import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateGameForm = ({ user }) => {

    const [gameData, setGameData] = useState({
        gameName: '',
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


    if (user.user_id) {
        return (
            <div>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category1" value={gameData.category1.name} onChange={handleCategoryNameChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue1.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue2.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue3.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category1" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category1.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category1" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category1.clue4.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category2" value={gameData.category2.name} onChange={handleCategoryNameChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue1.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue2.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue3.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category2" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category2.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category2" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category2.clue4.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category3" value={gameData.category3.name} onChange={handleCategoryNameChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue1.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue2.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue3.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category3" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category3.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category3" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category3.clue4.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control type="text" placeholder="Category Name" data-categoryNum="category4" value={gameData.category4.name} onChange={handleCategoryNameChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue1" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue1.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue1" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue1.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue2" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue2.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue2" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue2.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue3" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue3.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue3" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue3.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3 clue-form" >
                                    <Form.Control data-clue="clue4" data-categoryNum="category4" data-part="clueText" type="text" placeholder="Clue Text" value={gameData.category4.clue4.clueText} onChange={handleQuestionChange} />
                                    <Form.Control data-clue="clue4" data-categoryNum="category4" data-part="correctResponse" className="mt-3" type="text" placeholder="Correct Response" value={gameData.category4.clue4.correctResponse} onChange={handleQuestionChange}/>
                                </Form.Group>
                            </Col>
                        </Row>
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