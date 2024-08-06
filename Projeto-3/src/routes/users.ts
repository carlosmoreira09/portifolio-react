import * as express from 'express'
import * as userController from '../controller/user.controller'
import { jwtMiddleware } from '../middleware/user.middleware'
const userRouter = express.Router(); // Cria um novo objeto Router

userRouter.get('/:token',jwtMiddleware, userController.getAll);
userRouter.post('/register', userController.addUser);
userRouter.post('/login', userController.login);
userRouter.get('/delete/:id', userController.deleteUser);



export default userRouter;