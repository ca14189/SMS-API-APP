import AppError from '../error/app-error.js';
import db from '../models/index.js'; // Ensure this path is correct
import bcrypt from 'bcrypt';
import { GetToken } from '../utils/security.js';



// SaaS customer user login
export const CustUserLogin = async ({ email, password }) => {
    const userCust = await db.saas_cust_user.findOne({ where: { Email: email } });
    if (userCust) {
        const isPasswordValid = await bcrypt.compare(password, userCust.Password);
        if (isPasswordValid) {
            const claim = {
                cust_Id: userCust.Cust_Id,
                user_Id: userCust.id
            };
            const authToken = GetToken(claim)
            // const userInfo = {
            //     First_name: userCust.First_Name,
            //     Last_name: userCust.Last_Name,
            //     userEmail: userCust.Email,
            // };

            return { authToken };
        } else {
            throw new AppError("User Password is incorrect.");
        }
    } else {
        throw new AppError("User Email is not registered.");
    }
};
