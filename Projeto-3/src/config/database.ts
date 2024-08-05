import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config()
export const connection: DataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'calU*2803',
  database: 'auth',
  entities: [join(process.cwd(),'**/**/*.entity.ts')],
  synchronize: true,
})