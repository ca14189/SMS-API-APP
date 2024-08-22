
export default (sequelize, Sequelize) => {
    const SAAS_CUST = sequelize.define("SAAS_CUST", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        school_name: {
            type: Sequelize.STRING
        },
        address_1: {
            type: Sequelize.STRING
        },
        address_2: {
            type: Sequelize.STRING
        },
        pin: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        district: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        }
    });

    return SAAS_CUST;
};