import { Visibility, Weather } from "../types";

export const isString = (text: unknown): text is string => { // Implementing a type guard text is string
    return typeof text === 'string' || text instanceof String;
};

export const isDate = (date: string): boolean  => {
    return Boolean(Date.parse(date));
};

export const isWeather = (str: string): str is Weather => {
    return Object.values(Weather).map(v => v.toString()).includes(str);
};

export const isVisibility = (str: string): str is Visibility => {
    return Object.values(Visibility).map(v => v.toString()).includes(str);
};