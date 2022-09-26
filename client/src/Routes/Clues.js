import React, { useState, useEffect } from 'react';
import Clue from '../components/Clue/Clue';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './css/Clues.css';

const Clues = () => {

    const [cluesToRender, setCluesToRender] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/Clues", {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCluesToRender(data);
        })
        .catch((err) => console.log(err))
      },[])
        
        
            

    return (
        <div className="d-flex p-2 flex-wrap">
            {cluesToRender.map((clue) => 
            <Clue 
                clueText={clue.clueText} 
                correctResponse={clue.correctResponse}
                clueId = {clue.clueId}
                />)}
        </div>

    )
}

export default Clues;