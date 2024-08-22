export default (sequelize,Sequelize) => {
const SAAS_OTP = sequelize.define("SAAS_OTP",{
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    expireTime: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return SAAS_OTP;
};
