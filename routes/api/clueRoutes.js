const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

//Get all clues
router.get('/', async (req, res) => {
    try {
        const cluesData = await Clue.findAll({
            include: [
                { model: User, attributes: ['name', 'picture']}, 
                { model: Subject, attributes: ['area'] },
            ]
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
            include: [
                { model: User, attributes: ['name', 'picture']}, 
                { model: Subject, attributes: ['area'] },
            ]
        });
        res.status(200).json(clueData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Create a clue
router.post('/', (req, res) => {
    
    try {
        const newClue = Clue.create({
            ...req.body
        });
        res.status(200).json(newClue);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

//create multiple clues
router.post('/bulk', (req, res) => {
    console.log("body: ", req.body);
    try {
        const newClues = Clue.bulkCreate([
            ...req.body.clues
        ]);
        res.status(200).json(newClues);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Edit a clue
router.put('/:id', (req, res) => {
    try {
        const clueChanged = Clue.update(
            {
                ...req.body,
            },
            {
                where: { id: req.params.id },
            }
        )
        res.status(200).json(clueChanged);
    } catch(err) {
        res.status(500).json(err);
    }
});





module.exports = router;