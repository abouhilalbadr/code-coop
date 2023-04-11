import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        res.json({ message: 'Welcome to Code Coop API 👋' });
    } catch (error) {
        next(error);
    }
});

export default router;
