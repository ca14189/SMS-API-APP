import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config.js';
import tutorialModel from './tutorial.model.js';
import countryModel from './country.model.js';
import stateModel from './state.model.js';
import saasUserModel from "./user.model.js";
import saasUserRole from "./userRole.model.js";
import cityModel from './city.model.js';
import districtModel from './district.model.js';
import saas_cust_roleModel from './saas_cust_role.model.js';
import saas_cust_userModel from './saas_cust_user.model.js';
import saas_custModel from './saas_cust.model.js';
import saas_otpModel from './saas_otp.model.js';
import saas_school_class_sectionModel from './saas_school_class_section.model.js';
import saas_school_classModel from './saas_school_class.model.js';
import saas_school_parentModel from './saas_school_parent.model.js';
import saas_school_sectionModel from './saas_school_section.model.js';
import saas_school_studentModel from './saas_school_student.model.js';
import school_typeModel from './school_type.model.js';
import user_typeModel from './user_type.model.js';


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {
  Sequelize,
  sequelize,
  tutorials: tutorialModel(sequelize, Sequelize),
  countries: countryModel(sequelize, Sequelize),
  states: stateModel(sequelize, Sequelize),
  cities: cityModel(sequelize, Sequelize),
  districts: districtModel(sequelize, Sequelize),
  users: saasUserModel(sequelize, Sequelize),
  user_Role: saasUserRole(sequelize, Sequelize),
  user_type: user_typeModel(sequelize, Sequelize),
  saas_cust_role: saas_cust_roleModel(sequelize, Sequelize),
  saas_cust_user: saas_cust_userModel(sequelize, Sequelize),
  saas_cust: saas_custModel(sequelize, Sequelize),
  saas_otp: saas_otpModel(sequelize, Sequelize),
  saas_school_class_section: saas_school_class_sectionModel(sequelize, Sequelize),
  saas_school_class: saas_school_classModel(sequelize, Sequelize),
  saas_school_parent: saas_school_parentModel(sequelize, Sequelize),
  saas_school_section: saas_school_sectionModel(sequelize, Sequelize),
  saas_school_student: saas_school_studentModel(sequelize, Sequelize),
  school_type: school_typeModel(sequelize, Sequelize),

};

// // Establish Relationships

// Define relationships
// db.countries.hasMany(db.states, { foreignKey: 'country_Id', as: 'states' });
// db.states.belongsTo(db.countries, { foreignKey: 'country_Id', as: 'countries' });

// db.states.hasMany(db.districts, { foreignKey: 'state_Id', as: 'districts' });
// db.districts.belongsTo(db.states, { foreignKey: 'state_Id', as: 'state' });

// db.districts.hasMany(db.cities, { foreignKey: 'district_Id', as: 'cities' });
// db.cities.belongsTo(db.districts, { foreignKey: 'district_Id', as: 'districts' });

// // Establish relationships
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }


// });



export default db;
