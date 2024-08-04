import * as express from 'express'
import userController from '../controller/user.controller'
const userRouter = express.Router(); // Cria um novo objeto Router

userRouter.get('/', userController.getAll);
userRouter.post('/register', userController.addUser);

export default userRouter;