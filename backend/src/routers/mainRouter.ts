// src/routes/mainRouter.ts
import { Router } from 'express';
import { getHome, getAbout } from '../controllers/mainController';

const router = Router();

router.get('/', getHome);
router.get('/about', getAbout);

export default router;
