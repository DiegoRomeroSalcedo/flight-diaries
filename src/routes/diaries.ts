import express from "express";
import { Response } from "express";
import diaryService from "../services/diaryService";
import { DiaryEntry, NewDiaryEntry } from "../types";
import { newDiaryParser, errorMiddleware } from "../utils/middleware/middlewares";
import { Request } from "express";

const router = express.Router();

router.get('/', (_req, res: Response<DiaryEntry[]>) => {
    res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res: Response<DiaryEntry>) => {
    const id = req.params.id;
    const diary = diaryService.findById(Number(id));

    if (diary) {
        res.send(diary);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', newDiaryParser, (req: Request<unknown, unknown, NewDiaryEntry>, res: Response<DiaryEntry>) => {
    const addedEntry = diaryService.addDiary(req.body);
    res.json(addedEntry);
});

router.use(errorMiddleware);

export default router;
