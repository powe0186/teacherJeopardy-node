const router = require('express').Router();
const { User, Clue, Category, Subject, Game } = require('../../models');

//Get all categories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({ include: User });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get a single category by id
router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: User }, { model: Clue }]
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;