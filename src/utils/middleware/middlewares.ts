import { NextFunction } from "express";
import { newEntrySchema } from "../request";
import { Request, Response } from "express";
import { z } from "zod";

export const newDiaryParser = (req: Request, _res: Response, next: NextFunction) => {
    try {
        newEntrySchema.parse(req.body);
        next();
    } catch (e: unknown) {
        next(e);
    }
};

export const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (error instanceof z.ZodError) {
        res.status(400).send({ error: error.issues});
    } else {
        next(error);
    }
};