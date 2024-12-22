import { NewDiaryEntry, Visibility, Weather } from "../types";
// import parser from "./parser"; // Due to the use of zod, we don´t need to use any more parser
import { z } from "zod";

export const newEntrySchema = z.object({
    weather: z.nativeEnum(Weather), // fake the return value
    visibility: z.nativeEnum(Visibility),
    date: z.string().date(),
    comment: z.string().optional(),
});

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
    return newEntrySchema.parse(object);
};

export default toNewDiaryEntry;