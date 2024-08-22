'use strict';
import { DataTypes } from 'sequelize';
export default (sequelize) => {
    const USER_ROLE = sequelize.define('USER_ROLE', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }

    });
    return USER_ROLE;
};