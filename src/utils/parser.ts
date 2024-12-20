import { isDate, isString, isVisibility, isWeather } from "./typeGuard";
import { Visibility, Weather } from "../types";

const parseComment = (comment: unknown): string => {
    if (!isString(comment)) {
        throw new Error('Incorrect or missing comment');
    }

    return comment;
};

const parseDate = (date: unknown): string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date');
    }

    return date;
};

const parseWeather = (weather: unknown): Weather => {
    if (!isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather ' + weather);
    }

    return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
    if (!isString(visibility) || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility');
    }

    return visibility;
};

export default {
    parseComment,
    parseDate,
    parseWeather,
    parseVisibility,
};