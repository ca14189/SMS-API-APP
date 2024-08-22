export default (sequelize, Sequelize) => {
    const City = sequelize.define('City', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        districtId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Districts', // Ensure this matches the correct table name
                key: 'id'
            },
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });


    return City;
};
