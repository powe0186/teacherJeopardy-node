const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

// Get all of a user's info
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all of the clues from a user
router.get('/:id/clues', async (req, res) => {
    try {
        const userClues = await Clue.findAll({
            where: {
                user_id: req.params.id,
            }
        });
        res.status(200).json(userClues);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Create new user
router.post('/', async (req, res) => {
    try {
        
        const [user, created]= await User.findOrCreate({
            where: {
                email: req.body.email,
            },
            defaults: {
                name: req.body.name,
                email: req.body.email,
                picture: req.body.picture
            }
        });
        res.status(200).json(user)

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;