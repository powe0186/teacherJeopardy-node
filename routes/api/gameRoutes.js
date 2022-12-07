const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

//Create a game
router.post('/', (req, res) => {

    Game.create({
        ...req.body
    })
    .then((newGame) => {
        res.status(200).json(newGame);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router