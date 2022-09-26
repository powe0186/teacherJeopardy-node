const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clue extends Model {

}

Clue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        clueText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correctResponse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        subject_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subject',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'clue'
    }
)

module.exports = Clue;