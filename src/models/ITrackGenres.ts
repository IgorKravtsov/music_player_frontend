import {ITrack} from "./ITrack";
import {IGenre} from "./IGenre";

export interface ITrackGenres {
    id: number;
    trackId: number;
    track: ITrack;
    genreId: number;
    genre: IGenre;
}