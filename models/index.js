const User = require('./User');
const Clue = require('./Clue');
const Subject = require('./Subject');
const Category = require('./Category');
const Game = require('./Game');

//Each reader can have many clues. Each clue belongs to a reader.
User.hasMany(Clue, {
    foreignKey: 'clue_id',
    onDelete: 'CASCADE'
});

Clue.belongsTo(User, {
    foreignKey: 'user_id'
});

//Each Category can have multiple (4) clues.
Category.hasMany(Clue, {
    foreignKey: 'clue_id',
    onDelete: 'NO ACTION'
});

//Each category belongs to one user
Category.belongsTo(User, {
    foreignKey: 'user_id'
});

//Each category has many clues. (4, actually)
Category.hasMany(Clue, {
    foreignKey: 'id',
    onDelete: 'NO ACTION',
});

//Each Game can have multiple (4) categories.
Game.hasMany(Category, {
    foreignKey: 'category_id',
    onDelete: 'NO ACTION'
});





module.exports = { User, Clue, Subject, Category, Game }