import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config()
export const connection: DataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [join(process.cwd(), 'dist/**/*.entity.ts')],
  synchronize: true,
})