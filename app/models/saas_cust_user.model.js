'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const SAAS_CUST_USER = sequelize.define('SAAS_CUST_USER', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Cust_Id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    Cust_Role_Id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    First_Name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Middle_Name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Last_Name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Mobile: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    City: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    State: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Country: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });

  return SAAS_CUST_USER;
};
