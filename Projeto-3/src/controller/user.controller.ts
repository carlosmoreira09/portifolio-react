import { Router, Request, Response } from 'express';
import * as userModel from '../repository/user'
import { User } from '../entity/user.entity'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function getAll(req: Request, res: Response) {
 res.json(await userModel.findAll())
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
   await userModel.deleteUser(parseInt(id))
    res.status(200).json({
      sucess: true,
      message: 'User deleted successfully'
    })
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
    res.status(200).setHeader("Authorization", token).render('pages/register')

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
    await userModel.newUser(user).then(r => {
      res.status(200).send('User added successfull')
    })
    } catch (error) {
    res.status(400).send('Erro ao criar usuário')
  }
}