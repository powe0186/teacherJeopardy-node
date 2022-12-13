import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './GameSummary.css';


const GameSummary = ({ title, category1, category2, category3, category4 }) => {

    const [categoriesVisible, setCategoriesVisible] = useState(false);
    const [categoryStyle, setCategoryStyle] = useState({
        display: "none",
    })
    const [categoryData, setCategoryData] = useState({
        cat1: {},
        cat2: {},
        cat3: {},
        cat4: {}
    });


    const handleSeeCategories = async (event) => {
        await event.preventDefault();
        
        
        if (!categoriesVisible) {
            await setCategoryStyle({ display: "block" })
            //fetch Category Data
            const categoryIds = [category1, category2, category3, category4];
            const catNames = [];
            for (let i = 0; i < categoryIds.length; i++) {
                await fetch(`http://localhost:3001/api/categories/${categoryIds[i]}`, {
                    method: 'GET',
                    mode: 'cors'
                })
                    .then(response => response.json())
                    .then((data) => {
                        catNames.push(data);
                    })
                    .catch((err) => console.log(err));
            }
            await setCategoryData({
                cat1: catNames[0],
                cat2: catNames[1],
                cat3: catNames[2],
                cat4: catNames[3]
            })
        } else {
            setCategoryStyle({ display: "none" })
        }

        await setCategoriesVisible((categoriesVisible) => !categoriesVisible);
    };

    const handleGameStart = async (event) => {
        console.log('Game will start with : ', categoryData);
    }

    return (
        <Card id="GameSummaryCard" style={{ width: '18rem', margin: 'auto', marginBottom: '30px' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ListGroup variant="flush" class="category" style={categoryStyle}>
                    <ListGroup.Item className="category">{categoryData.cat1.topic}</ListGroup.Item>
                    <ListGroup.Item className="category">{categoryData.cat2.topic}</ListGroup.Item>
                    <ListGroup.Item className="category">{categoryData.cat3.topic}</ListGroup.Item>
                    <ListGroup.Item className="category">{categoryData.cat4.topic}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={handleSeeCategories}>{categoriesVisible ? "Hide Categories" : "See Categories"}</Button>
                <Button variant="success" style={categoryStyle} onClick={handleGameStart}>Start Game</Button>
            </Card.Body>
        </Card>
    )

}

export default GameSummary;