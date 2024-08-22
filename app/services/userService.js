import db from '../models/index.js';
import bcrypt from 'bcrypt';
import AppError from "../error/app-error.js";
import security from "../utils/security.js";

export const userLoginService = async ({ email, password }) => {
    try {
        // Find the user by email
        const user = await db.users.findOne({ where: { Email: email } });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                // Create claim for the token
                const userDetails = {
                    id: user.id,
                    userRole: user.user_role,
                };

                // Generate access token
                const access_token = security.getToken(userDetails);

                return {
                    authToken: access_token,
                };
            } else {
                throw new AppError("User Password Wrong..");
            }
        } else {
            throw new AppError("User Email is Not Registered");
        }
    } catch (err) {
        console.error('Error while processing login request:', err); // Detailed error logging
        throw new AppError('Error while processing login request');
    }
};
