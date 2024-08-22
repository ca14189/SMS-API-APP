import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

const getToken = (userDetails) => {
    console.log("key", JWT_SECRET);
    const token = jwt.sign(userDetails, JWT_SECRET, { expiresIn: 3600 });
    // console.log("Generated token", token);
    return token

}

const getRefreshToken = (subject) => {
    const token = jwt.sign(subject, JWT_SECRET, {
        expiresIn: 3600
    });
    return token
}

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded
    } catch (err) {
        throw err;
    }
}


export default { getToken, getRefreshToken, verifyToken };



