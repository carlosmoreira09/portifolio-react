import { Router, Request, Response } from 'express';
import * as userModel from '../repository/user'
import { User } from '../entity/user.entity'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function getAll(req: Request, res: Response) {
  const users = await userModel.findAll();
 res.render('pages/list', { list: users })
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
   await userModel.deleteUser(parseInt(id))
    const users = await userModel.findAll();
    res.status(200).render('pages/list', { list: users, message: 'User deleted successfully' })
  }
  catch (error) {
    res.status(401).json({
      success: false,
      message: 'Error to Delete User',
    })
  }
}
export async function login(req: Request, res: Response) {
  const username: string = req.body.username;
  const password: string = req.body.password;
  const existUser = await userModel.findUser(username);
  if(!existUser) {
    res.status(401).json({
      success: false,
      message: "Username not exists"
    })
    return
  }
  const passwordMatch = await bcrypt.compare(password, existUser.password);
  if(passwordMatch) {
    const token = jwt.sign({
      id: existUser.id,
      username: existUser.username,
    }, process.env.JWT_SECRET,{ expiresIn: '1h' })
    res.status(200).redirect('/api/users/'+ token)

  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect password"
    })
  }
}

export async function addUser(req: Request, res: Response)  {

  const username: string = req.body.username;
  const password: string = req.body.password;
  if(!username || !password){
    res.status(400).json({
      success: false,
      message: "Username and password are required",
    })
    return
  }
  const existUser = await userModel.findUser(username);
  if(existUser) {
    res.status(401).json({
      success: false,
      message: "Username already exists"
    })
    return
  }

  const hashPassword = await bcrypt.hash(password, 12)

  const user = new User(username, hashPassword);

  try {
    await userModel.newUser(user)

    const users = await userModel.findAll();
    res.render('pages/list', { list: users })
  } catch (error) {
    res.status(400).send('Erro ao criar usuário')
  }
}