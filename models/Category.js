const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {

}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        topic: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        clue1: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clue',
                key: 'id'
            }
        },
        clue2: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clue',
                key: 'id'
            }
        },
        clue3: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clue',
                key: 'id'
            }
        },
        clue4: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'clue',
                key: 'id'
            }
        },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        uderscored: true,
        modelName: 'category'
    }
)

module.exports = Category;