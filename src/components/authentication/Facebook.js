import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { facebookAuthenticate } from '../../redux';
import queryString from 'query-string';

const Facebook = () => {

    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        // if state & code are not null then the user been authenticated and is logged in
        if (state && code) {
            dispatch(facebookAuthenticate(state, code));
        }
    }, [location]);

    // once authenticated, redirect to the home page
    return <Redirect to='/' />
}

export default Facebook
