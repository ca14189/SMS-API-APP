export default (sequelize, Sequelize) => {
    const USER_TYPE = sequelize.define("USER_TYPE", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    });

    return USER_TYPE;
};