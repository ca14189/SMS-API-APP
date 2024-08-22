export default (sequelize, Sequelize) => {
    const SAAS_SCHOOL_STUDENT = sequelize.define("SAAS_SCHOOL_STUDENT", {
        cust_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        student_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        class_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        father_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        scholar_number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        parent_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return SAAS_SCHOOL_STUDENT;
};
