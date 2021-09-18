import React from "react";
import Login from "../pages/Login";
import Main from "../pages/Main";
import UploadTrack from "../pages/UploadTrack";
import Tracks from "../pages/Tracks";
import Register from "../pages/Register";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    MAIN = "/",
    LOGIN = "/login",
    TRACKS = "/tracks",
    UPLOADTRACK = "/upload",
    REGISTER = "/register",
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.MAIN, component: Main, exact: true },
    { path: RouteNames.LOGIN, component: Login, exact: true },
    { path: RouteNames.TRACKS, component: Tracks, exact: true },
    { path:RouteNames.REGISTER, component: Register, exact: true },
]

export const privateRoutes: IRoute[] = [
    ...publicRoutes,
    { path: RouteNames.UPLOADTRACK, component: UploadTrack, exact: true },
]