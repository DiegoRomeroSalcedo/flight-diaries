export enum Weather {
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Windy = "windy",
    Stormy = "stormy",
}

export enum Visibility {
    Great = "great",
    Good = "good",
    Ok = "ok",
    Poor = "poor",
}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

// In this case we are using the Pick utility type to create a new type that only includes the values we want to expose.
// const getNonSensitiveEntries = 
//     (): Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>[] => {
// }

// How we want exclude the comment field, we could use the Omit utility type to create a new type that excludes the comment field.
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
