const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {

}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        category1: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        category2: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        category3: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        category4: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'category',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        uderscored: true,
        modelName: 'game'
    }
)

module.exports = Game;