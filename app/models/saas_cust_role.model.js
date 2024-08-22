
export default (sequelize, Sequelize) => {
    const SAAS_CUST_ROLE = sequelize.define("SAAS_CUST_ROLE", {
        name: {
            type: Sequelize.STRING,
            allowNull: false, // Optional: add constraints as needed
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true, // Optional: add constraints as needed
        }
    });

    return SAAS_CUST_ROLE;
};
