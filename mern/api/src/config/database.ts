import { MongoClient } from "mongodb";
import { env } from "../env";

const DB_URI = `mongodb://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}`

const client = new MongoClient(DB_URI);

export const connectDB = async () => {
    try {
        await client.connect();
        console.info("Connected to mongoDB")
    } catch (error) {
        console.error("MongoDB connection error:", error)
        process.exit(1)
    }
}

export const db = client.db(env.DB_NAME);
