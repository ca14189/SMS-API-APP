export default (sequelize, Sequelize) => {
    const SCHOOL_TYPE = sequelize.define("SCHOOL_TYPE", {
        type: {
            type: Sequelize.ENUM("value"),
            allowNull: false
        },
        starts: {
            type: Sequelize.STRING,
            allowNull: true
        },
        maximum: {
            type: Sequelize.STRING,
            allowNull: true
        },
        board: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return SCHOOL_TYPE;
};