
export default (sequelize, Sequelize) => {
    const SAAS_SCHOOL_CLASS = sequelize.define("SAAS_SCHOOL_CLASS", {
        cust_id: {
            type: Sequelize.INTEGER,
            allowNull: false // Assuming cust_id is required
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false // Assuming name is required
        },
        rank: {
            type: Sequelize.STRING,
            allowNull: false // Assuming rank is required
        },
        section_number: {
            type: Sequelize.INTEGER,
            allowNull: false // Assuming section_number is required
        }
    });

    return SAAS_SCHOOL_CLASS;
};