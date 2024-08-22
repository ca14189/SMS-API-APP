import Joi from 'joi';

export const saas_cust_Schema = () => {
    const schema = Joi.object({
        school_name: Joi.string().required(),
        city: Joi.string().required(),
        email: Joi.string().email().required(),
    });

    return schema;
};

export const CustUserLoginSchema = () => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return schema;
};

export const userEmailSchema = () => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
    });

    return schema;
};

export const otp_validation = () => {
    const schema = Joi.object({
        code: Joi.string().required(),
    });

    return schema;
};

export const update_password_validation = () => {
    const schema = Joi.object({
        newPassword: Joi.string().required(),
        confirmPassword: Joi.string().required(),
    });

    return schema;
};

export const school_type_validation = () => {
    const schema = Joi.object({
        type: Joi.string().required(),
        starts: Joi.string().required(),
        maximum: Joi.string().required(),
        board: Joi.string().required(),
    });

    return schema;
};

export const school_class_validation = () => {
    const schema = Joi.object({
        name: Joi.string().required(),
        rank: Joi.string().required(),
        section_number: Joi.number().integer().required(),
    });

    return schema;
};

// Uncomment and use if needed
// export const saas_school_classDelete_validation = () => {
//   const schema = Joi.object({
//     class_id: Joi.number().integer().required(),
//   });

//   return schema;
// };

// export const school_class_update_validation = () => {
//   const schema = Joi.object({
//     name: Joi.string().required(),
//     rank: Joi.string().required(),
//     id: Joi.number().integer().required(),
//     section_number: Joi.number().integer().required(),
//   });

//   return schema;
// };

export const student_parent = () => {
    const schema = Joi.object({
        name: Joi.string().required(),
        locality: Joi.string().required(),
        mobile: Joi.string().required(),
        alternate_mobile: Joi.string().required(),
        email: Joi.string().email().required(),
        address_1: Joi.string().required(),
        address_2: Joi.string().required(),
        city: Joi.string().required(),
        district: Joi.string().required(),
    });

    return schema;
};

export const parent_delete_validation = () => {
    const schema = Joi.object({
        parent_id: Joi.number().integer().required(),
    });

    return schema;
};

export const school_student_validation = () => {
    const schema = Joi.object({
        student_name: Joi.string().required(),
        class_name: Joi.string().required(),
        section_id: Joi.number().integer().required(),
        scholar_number: Joi.string().required(),
        father_name: Joi.string().required(),
        gender: Joi.string().required(),
        email: Joi.string().email().required(),
    });

    return schema;
};

export const school_class_section_validation = () => {
    const schema = Joi.object({
        class_id: Joi.number().integer().required(),
        section_id: Joi.number().integer().required(),
    });

    return schema;
};

export const school_section = () => {
    const schema = Joi.object({
        name: Joi.string().required(),
        rank: Joi.string().required(),
    });

    return schema;
};
