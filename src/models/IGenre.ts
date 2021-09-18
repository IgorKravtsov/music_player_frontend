import {ITrackGenres} from "./ITrackGenres";

export interface IGenre {
    id: number;
    name: string;
    genres: ITrackGenres;
}
