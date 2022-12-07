const router = require('express').Router();
const clueRoutes = require('./clueRoutes');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/clues', clueRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/games', gameRoutes);


module.exports = router;