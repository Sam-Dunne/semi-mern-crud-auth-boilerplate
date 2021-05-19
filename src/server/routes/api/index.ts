import { Router } from 'express';
import apiRouteRouter from './apiRoute';
import usersRouter from './users';
import contactRouter from './contact';

const router = Router();

router.use('/contact', contactRouter);
router.use('/users', usersRouter);
router.use('/apiRoute', apiRouteRouter);

export default router;