import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Clue.css';

function WithHeaderExample({ clueText, correctResponse, createdBy }) {

    // ADD MORE PROPS LATER!!!!!

    return (
        <Card
            style={{
                width: '18rem',
                borderRadius: '1.5rem',
                border: '3px black solid',
                backgroundColor: 'blue',
                margin: '10px'
            }}>
            <Card.Body style={{ color: 'white' }} >
                <Card.Title>{clueText}</Card.Title>
                <Card.Text>
                    Correct Response: {correctResponse}
                </Card.Text>
                <Card.Text>
                    Created By: {createdBy}
                </Card.Text>
                <Button variant="primary">Add Clue</Button>
            </Card.Body>
        </Card>

    );
}

export default WithHeaderExample;

// 