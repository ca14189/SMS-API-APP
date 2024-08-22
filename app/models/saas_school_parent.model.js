export default (sequelize, Sequelize) => {
    const SAAS_SCHOOL_PARENT = sequelize.define("SAAS_SCHOOL_PARENT", {
        cust_id: {
            type: Sequelize.INTEGER,
            allowNull: false // Assuming cust_id is required
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false // Assuming name is required
        },
        locality: {
            type: Sequelize.STRING,
            allowNull: false // Assuming locality is required
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false // Assuming email is required
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false // Assuming mobile is required
        },
        alternate_mobile: {
            type: Sequelize.STRING
        },
        address_1: {
            type: Sequelize.STRING
        },
        address_2: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        district: {
            type: Sequelize.STRING
        }
    });

    return SAAS_SCHOOL_PARENT;
};