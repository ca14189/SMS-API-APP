export default (sequelize, Sequelize) => {
    const District = sequelize.define('District', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        stateId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'States', // Ensure this matches the correct table name
                key: 'id'
            },
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });




    return District;
};