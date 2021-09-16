import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./UserContext.js";

export default function PrivateRoute({component: Component, ...rest}) {
    const { user } = useContext(UserContext);


    return (
        <Route {...rest} render={() => {
            if (user.name) {
                return <Component />
            } else {
               return <Redirect to="/account/login" />
            }
        }}/>
    )
} 
