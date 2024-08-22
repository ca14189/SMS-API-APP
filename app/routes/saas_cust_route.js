import { Router } from 'express';
import { Cust_UserLogin_Controller } from '../controllers/saas_cust_controller.js';


const router = Router();

router.post('/cust-user-login', Cust_UserLogin_Controller)

export default router
