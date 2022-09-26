const router = require('express').Router();
const clueRoutes = require('./clueRoutes');
const userRoutes = require('./userRoutes');

router.use('/clues', clueRoutes);
router.use('/user', userRoutes);


module.exports = router;