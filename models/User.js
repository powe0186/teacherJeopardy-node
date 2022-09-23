const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {

}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                try {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                } catch (err) {
                    console.log(err);
                    return err;
                }

            },

            //create a hook called 'beforeUpdate' (See Reader.js of lesson 13.22)
        },
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'user',
    }
);


module.exports = User;