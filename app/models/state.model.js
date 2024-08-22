export default (sequelize, Sequelize) => {
    const State = sequelize.define('state', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'countries', // refers to table name
          key: 'id', // refers to column name in countries table
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  
    return State;
  };
  