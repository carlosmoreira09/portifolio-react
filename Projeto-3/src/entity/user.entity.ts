import { Entity, Column,PrimaryGeneratedColumn} from "typeorm"

@Entity('user')
export class User {
  constructor(username: string,password: string){
    this.username = username;
    this.password = password;
  }
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string | undefined

  @Column()
  password: string
}