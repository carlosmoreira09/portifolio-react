import { User } from "../entity/user.entity"
import { connection } from '../config/database'

const userRepository = connection.getRepository(User)

export async function newUser(user: User) {
  const newUser = userRepository.create(user)
  return await userRepository.save(newUser)
}

export async function deleteUser(id: number) {
  return await userRepository.delete(id)
}

export async function findAll() {
  return await userRepository.find({
    select: {
      id: true,
      username: true
    }
  })
}
export async function findUser(username: string) {
  return await userRepository.findOne({
    where: {
      username: username
    }
  })
}
