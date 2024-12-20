import { NewDiaryEntry } from "../types";
import parser from "./parser";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing object');
    }

    if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object) {
        const newEntry: NewDiaryEntry = {
            weather: parser.parseWeather(object.weather), // fake the return value
            visibility: parser.parseVisibility(object.visibility),
            date: parser.parseDate(object.date),
            comment: parser.parseComment(object.comment),
        };
        return newEntry;
    }

    throw new Error('Incorrect data: some fields are missing');
};

export default toNewDiaryEntry;