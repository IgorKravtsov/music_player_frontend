import axios from "axios";
import {AuthActionsEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import {IUser} from "../../../models/IUser";
import UserService from "../../../api/UserService";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetIsAuthAction => ({type: AuthActionsEnum.SET_IS_AUTH, payload: auth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),
    login: (username: string, password:string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await UserService.getUsers()
            const mockUser = response.data.find(user => user.username === username && user.password === password);
            if (mockUser) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', mockUser.username);
                dispatch(AuthActionCreators.setUser(mockUser));
                dispatch(AuthActionCreators.setIsAuth(true))
            } else {
                dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}