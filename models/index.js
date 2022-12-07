const User = require('./User');
const Clue = require('./Clue');
const Subject = require('./Subject');
const Category = require('./Category');
const Game = require('./Game');

User.hasMany(Clue, {});
Clue.belongsTo(User, {});

Subject.hasMany(Clue, {});
Clue.belongsTo(Subject, {});

User.hasMany(Category, {});
Category.belongsTo(User, {});

User.hasMany(Game, {});
Game.belongsTo(User, {});


module.exports = { User, Clue, Subject, Category, Game }