import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import _ from '../../core/utils';

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                matchProps => {
                    return _.isAuth()
                        ? <Component {...matchProps} />
                        : <Redirect to={{
                            pathname: "/login",
                            state: { from: matchProps.location }
                        }} />
                }}
        />
    )
}
