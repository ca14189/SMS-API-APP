import { userLoginService } from '../services/userService.js';

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userLoginService({ email, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

