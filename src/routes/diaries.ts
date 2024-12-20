import express from "express";
import { Response } from "express";
import diaryService from "../services/diaryService";
import { DiaryEntry } from "../types";
import toNewDiaryEntry from "../utils/request";

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

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedEntry = diaryService.addDiary(newDiaryEntry);
        res.json(addedEntry);
    } catch (e: unknown) {
        let errorMessage = "Something went wrong: ";
        if (e instanceof Error) {
            errorMessage += e.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;
