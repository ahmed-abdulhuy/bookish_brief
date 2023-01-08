import dotenv from "dotenv";
import pkg from "pg"

const {Pool} = pkg

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_DEV_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD
} = process.env


const Client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DEV_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
})

export default Client