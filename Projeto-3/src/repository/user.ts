import { User } from "../models/user.entity"
import { connection } from '../config/database'

const userRepository = connection.getRepository(User)

export function newUser(user: User) {
  return userRepository.save(user)
}

export function deleteUser(id: number) {
  return userRepository.delete(id)
}

export function getUser(id: number) {
  return userRepository.findOne({ where: { id: id } })
}