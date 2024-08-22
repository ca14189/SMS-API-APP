import { Router } from 'express';
import { findAllCountries,getById,deleteCountry,updateCountry,createCountry } from '../controllers/country.controller.js';

const router = Router();

// Retrieve all Countries
router.get('/', findAllCountries);

router.get('/:id', getById);

router.delete('/:id', deleteCountry);

router.put('/:id', updateCountry);

router.post('/', createCountry);

export default router;
