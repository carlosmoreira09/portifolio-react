import { Entity, Column,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("username")
  username: string

  @Column('password')
  password: string
}