import dotenv from "dotenv"
import path from "path"

dotenv.config({
    path: path.join(__dirname, "../.env")
})

export const env = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME
}

