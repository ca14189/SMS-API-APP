
export default (sequelize,Sequelize) => {
    const SAAS_SCHOOL_CLASS_SECTION = sequelize.define("SAAS_SCHOOL_CLASS_SECTION", {
        class_id: {
            type: Sequelize.INTEGER,
            allowNull: false // Assuming class_id is required
        },
        section_id: {
            type: Sequelize.INTEGER,
            allowNull: false // Assuming section_id is required
        }
    });

    return SAAS_SCHOOL_CLASS_SECTION;
};