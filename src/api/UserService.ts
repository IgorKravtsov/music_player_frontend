import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
require('dotenv').config();

export default class UserService {

    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        const _apiUrl = `${process.env.API_HOST_USERS}`;
        return axios.get<IUser[]>(_apiUrl)
    }
}
