export default (sequelize, Sequelize) => {
    const City = sequelize.define('City', {
        district_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return City;
};
