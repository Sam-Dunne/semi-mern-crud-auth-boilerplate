import { Router } from 'express';
import apiRouteRouter from './apiRoute';
import usersRouter from './users';

const router = Router();

router.use('/userRouter', usersRouter);
router.use('/apiRoute', apiRouteRouter);

export default router;