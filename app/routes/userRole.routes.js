import { Router } from 'express';
import { createRole} from '../controllers/userRole.controller.js';


const router = Router();

router.post('/', createRole);
export default router;