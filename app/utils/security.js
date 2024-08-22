import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

export const GetToken = (userDetails) => {
    const token = jwt.sign(userDetails, JWT_SECRET, { expiresIn: 3600 });
    // console.log("Generated token", token);
    return token

}

export const GetRefreshToken = (subject) => {
    const token = jwt.sign(subject, JWT_SECRET, {
        expiresIn: 3600
    });
    return token
}

export const VerifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded
    } catch (err) {
        throw err;
    }
}
