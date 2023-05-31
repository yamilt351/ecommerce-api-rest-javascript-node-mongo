import { Router } from 'express';
import cartController from '../Controllers/shopingCartController.js';
import authMiddleware from '../helpers/jwt.js';
import cleanBody from '../helpers/sanitizer.js';
import adminCheck from '../helpers/adminCheck.js';
const router = Router();

router.post('/cart', authMiddleware, cleanBody, cartController.createCart);

router.get('/cart/:userId', authMiddleware, cartController.getUserCart);

router.get('/cart', authMiddleware, adminCheck, cartController.getAll);

router.put('/cart/:cartId', authMiddleware, cleanBody, cartController.editCart);

router.delete('/cart/:cartId', authMiddleware, cartController.deleteCart);

export default router;
