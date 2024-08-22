import { Router } from 'express';
import { userLogin } from '../controllers/user.controller.js';

const router = Router();


router.post('/', userLogin);

export default router;




// Retrieve all Countries
// router.get('/', findAllCountries);

// router.get('/:id', getById);

// router.delete('/:id', deleteCountry);

// router.put('/:id', updateCountry);
