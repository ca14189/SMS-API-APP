import unAuthorized from '../error/unauthorize.js';
import security from '../utils/security.js';


export const jwt = () => {
    return (req, res, next) => {
        try {
            authorize(req);
            next();
        } catch (err) {
            next(err);
        }
    }
}


authorize = (req) => {
    const url = req.originalUrl;
    // console.log("request url :",url)
    if (!publisPath.includes(url)) {
        // const token = req.headers['authorization'];
        const token = req.headers['authorization']?.split(' ')[1];
        //console.log("token",token)
        if (!token) {
            throw new unAuthorized("Authorization token is missing in request header");
        }
        const claim = security.verifyToken(token);
        req.userContext = claim; //Set claim info to req 
    }
}

const publisPath = [
    '/saas/user-login'
];

