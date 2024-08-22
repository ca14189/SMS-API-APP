
export default (sequelize, Sequelize) => {
    const District = sequelize.define('District', {
        state_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return District;
};
