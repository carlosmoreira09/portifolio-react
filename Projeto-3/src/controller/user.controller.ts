import { Router, Request, Response } from 'express';
import { User } from '../models/user.entity';
import { connection } from '../config/database';


const getAll = (req: Request, res: Response) => {

}

const addUser = (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;


}
export default { getAll, addUser }