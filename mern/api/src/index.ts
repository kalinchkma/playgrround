import express, { NextFunction, Request, Response } from "express"
import { env } from "./env"
import { connectDB, db } from "./config/database"
import * as yup from "yup"
import { validate } from "./middleware/validation"

const app = express()

const port = env.PORT

app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

connectDB()

app.get('/', async (req, res, next) => {
    const collections = await db.listCollections().toArray() 
    res.status(200).json({
        message: "Created collections",
        data: collections
    })
})


const createTodoSchema = yup.object({
    name: yup.string().min(2).required("")
})

app.post('/create-todo/',validate(createTodoSchema), async (req: Request<{}, {}, yup.InferType<typeof createTodoSchema>>, res: Response, next: NextFunction) => {
    try {
        await db.createCollection(req.body?.name)
        res.status(200).json({message: "collection created", })
    } catch(error) {           
        console.info("falied to create collection list")
        res.json({message: "error creating collection"})
    }
})

app.listen(port, () => {
    console.info(`app listensing on port ${port}`)
})