import express, { NextFunction, Request, Response } from "express"
import * as yup from "yup"

export const validate = (schema: yup.ObjectSchema<any>): express.RequestHandler => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        req.body = await schema.validate(req.body, {abortEarly: false, stripUnknown: true})
        next()
    } catch(error) {
        if (error instanceof yup.ValidationError) {
            res.status(400).json({status: "error",message: "Bad request", errors: error.errors})
            return
        }
         res.status(500).json({message: "Internal server error", status: "error"})
         return
    }
}

