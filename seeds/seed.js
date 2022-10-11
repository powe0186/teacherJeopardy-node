const sequelize = require('../config/connection');
const { User, Clue, Subject, Category } = require('../models');

const userSeedData = require('./userSeedData.json');
const subjectSeedData = require('./subjectSeedData.json');
const clueSeedData = require('./clueSeedData.json');
const categorySeedData = require('./categorySeedData.json');

const seedDatabase = async () => {

    /*sync({ force: true }) and sync({ alter: true }) can be destructive operations. 
    Therefore, they are not recommended for production-level software. 
    Instead, synchronization should be done with the advanced concept of Migrations, 
    with the help of the Sequelize CLI. */
    await sequelize.sync({ force: true });
    console.log("All table models created successfully!");

    const user = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    const subjects = await Subject.bulkCreate(subjectSeedData, {
        individualHooks: true,
        returning: true,
    });

    const clues = await Clue.bulkCreate(clueSeedData, {
        individualHooks: true,
        returning: true,
    })

    const categories = await Category.bulkCreate(categorySeedData, {
        individualHooks: true,
        returning: true,
    })

    await process.exit(0);
 
}


seedDatabase();