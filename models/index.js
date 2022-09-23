const User = require('./User');
const Clue = require('./Clue');
const Subject = require('./Subject');

//Each reader can have many clues. Each clue belongs to a reader.
User.hasMany(Clue, {
    foreignKey: 'clue_id',
    onDelete: 'CASCADE'
})

Clue.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Clue, Subject }