const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

//Get all categories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [
                { model: User, attributes: ['name', 'picture']},
            ]
    });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get a single category by id
router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name', 'picture']},
            ]
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Create a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create({
            topic: req.body.categoryName,
            clue1: req.body.clue1Id,
            clue2: req.body.clue2Id,
            clue3: req.body.clue3Id,
            clue4: req.body.clue4Id,
            userId: req.body.userId,
        });
        res.status(200).json(newCategory);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;