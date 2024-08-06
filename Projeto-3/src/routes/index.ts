import { Router } from 'express';
import userRouter from './users';

const routes = Router();
// define the base path and the router that's going to be called

// CRUD User Route
routes.use('/users', userRouter);

export default routes;