
import AppError from '../error/app-error.js';
import { CustUserLoginSchema } from '../schemaValidator/saas_cust_validation.js';
import { CustUserLogin } from '../services/saas_custService.js';
import { fromBody, Success } from '../utils/request-handeler.js';

export const Cust_UserLogin_Controller = async (req, res, next) => {
    try {
        const { email, password } = fromBody(req);
        // Check if email or password is missing
        if (!email || !password) {
            throw new AppError("Email and password are required.");
        }
        const schema = CustUserLoginSchema();
        const { error, value } = schema.validate({ email, password });
        console.log("errror inn", error)
        if (error) {
            const errorMessage = error.details[0].message;
            throw new AppError(errorMessage);
        }
        const result = await CustUserLogin(value)
        if (result !== null) {
            Success(res)(result);
        }
    } catch (error) {
        next(error);
    }
}
