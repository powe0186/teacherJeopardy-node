import GameSummary from '../components/GameSummary/GameSummary';
import React, { useState, useEffect } from 'react';

const MyGames = ({ user }) => {

    const [gamesToRender, setGamesToRender] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:3001/api/games/user/${user.user_id}`, {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.json())
        .then((data) => {
            console.log('Games we got back: ', data);
            setGamesToRender(data);
        })
        .catch((err) => {console.log(err)})

    }, [user])


    if (user.user_id) {

        return (
            <div className="d-flex p-2 flex-wrap">
                {
                    gamesToRender.map((game) =>
                        <GameSummary
                            
                            key={game.id}
                            title={game.title}
                            category1={game.category1}
                            category2={game.category2}
                            category3={game.category3}
                            category4={game.category4}
                        />)}
            </div>

        )
    } else {
        return (
            <h1>User needs to Log In!</h1>
        )
    }
}

export default MyGames;