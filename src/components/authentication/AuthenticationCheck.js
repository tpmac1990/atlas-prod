import React, { Fragment } from 'react'
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'

import { setPopupMessage } from '../../redux'

// redirect to the login page if not authenticated
const AuthenticationCheck = ({children, msg}) => {

    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector(state => state.authenticate)

    if (isAuthenticated){
        // render the requested component
        return <Fragment>{children}</Fragment>
    } else {
        // display error message
        dispatch(setPopupMessage({message: msg, type: 'error', style: 'error-map'}))
        // redirect to login page if the requested page requires authentication and the user isn't
        return <Redirect to='/login' />
    }
}

export default AuthenticationCheck
