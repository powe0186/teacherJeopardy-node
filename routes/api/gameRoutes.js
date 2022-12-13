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

//Get all Games by a specific user ID:
router.get('/user/:id', async (req, res) => {
    await Game.findAll({
        where: {
            userId: req.params.id,
        },
    })
        .then((games) => {
            res.status(200).json(games);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })

});


module.exports = router