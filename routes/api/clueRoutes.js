const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

//Get all clues
router.get('/', async (req, res) => {
    try {
        const cluesData = await Clue.findAll({
            include: [{ model: User }]
        });
        res.status(200).json(cluesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a single clue by ID
router.get('/:id', async (req, res) => {
    try {
        const clueData = await Clue.findByPk(req.params.id, {
            include: [{ model: User }]
        });
        res.status(200).json(clueData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;