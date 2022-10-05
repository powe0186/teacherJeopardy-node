const router = require('express').Router();
const clueRoutes = require('./clueRoutes');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/clues', clueRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);


module.exports = router;