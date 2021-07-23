import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const ProtectedRoute = ({ component: Component, loggedUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        loggedUser !== undefined
            ? <Component {...props} />
            :
            <Redirect to={{
                pathname: '/pleaselogin',
                state: { from: props.location }
            }} />


    )
    } />
)

export default ProtectedRoute
/*<Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
*/