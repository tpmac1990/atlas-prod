import React, { useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { googleAuthenticate } from '../../redux';
import queryString from 'query-string';

const Google = () => {

    let location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        // location.search: gets the url, queryString.parse: places it into a key value format
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        if (state && code) {
            // console.log(state,code)
            dispatch(googleAuthenticate(state, code));
        }
    }, [location]);

    // once authenticated, redirect to the home page
    return <Redirect to='/' />

}

export default Google;
