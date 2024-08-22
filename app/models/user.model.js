'use strict';
import { DataTypes} from 'sequelize';

export default (sequelize) => {
    const SAAS_USER= sequelize.define('SAAS_USER',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fullName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        mobile: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_type: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_role: {
            allowNull: false,
            type: DataTypes.STRING
        },
  }, {
    sequelize,
    modelName: 'User',
  });

  return SAAS_USER;
};
