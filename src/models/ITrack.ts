import {ITrackGenres} from "./ITrackGenres";

export interface ITrack {
    id: number;
    name: string;
    artist: string;
    album: string;
    duration: number;
    genres: ITrackGenres[];
}

