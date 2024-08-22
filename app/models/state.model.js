export default (sequelize, Sequelize) => {
  const State = sequelize.define('State', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Countries', // Ensure this matches the correct table name
        key: 'id'
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
