import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        isAuth ?
        <Switch>
            {privateRoutes.map(route =>
                <Route
                    {...route}
                    key={route.path}
                />
            )}
            <Redirect to={RouteNames.MAIN}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    {...route}
                    key={route.path}
                />
            )}
            <Redirect to={RouteNames.MAIN}/>
        </Switch>
    );
};

export default AppRouter;