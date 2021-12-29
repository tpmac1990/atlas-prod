import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL, 
    PASSWORD_RESET_SUCCESS, PASSWORD_RESET_FAIL, PASSWORD_RESET_CONFIRM_SUCCESS, PASSWORD_RESET_CONFIRM_FAIL, 
    SIGNUP_SUCCESS, SIGNUP_FAIL, ACTIVATION_SUCCESS, ACTIVATION_FAIL, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAIL, 
    FACEBOOK_AUTH_SUCCESS, FACEBOOK_AUTH_FAIL, LOGOUT } from './authenticateType'
import { SET_POPUP_MESSAGE } from '../messageHandler/messageHandlerType'
import axios from 'axios'


export const load_user = () => dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        axios
            .get("/auth/users/me/", config)
            .then(res => {
                    dispatch({
                        type: USER_LOADED_SUCCESS,
                        payload: res.data
                    });
                })
            .catch(err => {
                    dispatch({
                        type: USER_LOADED_FAIL
                    });
                })
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

// Checks if the user is authenticated when the application is first loaded. used in the header/navbar component
export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        axios
            .post("/auth/jwt/verify/", body, config)
            .then(res => {
                    if (res.data.code !== 'token_not_valid') {
                        dispatch({
                            type: AUTHENTICATED_SUCCESS
                        });
                    } else {
                        dispatch({
                            type: AUTHENTICATED_FAIL
                        });
                    }
                })
            .catch(err => {
                    dispatch({
                        type: AUTHENTICATED_FAIL
                    });
                })

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};



export const signup = dict => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // const body = JSON.stringify({ first_name, last_name, email, password, re_password });

    axios
        .post("/auth/users/", dict, config)
        .then(res => {
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: res.data
                });
            })
        .catch(err => {
                dispatch({
                    type: SIGNUP_FAIL
                })
            })
};


export const verify = (uid, token) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    axios
        .post("/auth/users/activation/", body, config)
        .then(res => {
                dispatch({
                    type: ACTIVATION_SUCCESS,
                });
            })
        .catch(err => {
                dispatch({
                    type: ACTIVATION_FAIL
                })
            })
};


export const login = (email, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    axios
        .post("/auth/jwt/create/", body, config)
        .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
                dispatch(load_user());
            })
        .catch(err => {
                dispatch({
                    type: LOGIN_FAIL
                })
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: 'Sorry, your username or password was incorrect', type: 'error', style: 'error-map'}
                })
            })
};


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};


export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    axios
        .post("/auth/users/reset_password/", body, config)
        .then(res => {
                dispatch({
                    type: PASSWORD_RESET_SUCCESS
                });
            })
        .catch(err => {
                dispatch({
                    type: PASSWORD_RESET_FAIL
                });
            })
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    axios
        .post("/auth/users/reset_password_confirm/", body, config)
        .then(res => {
                dispatch({
                    type: PASSWORD_RESET_CONFIRM_SUCCESS
                });
            })
        .catch(err => {
                dispatch({
                    type: PASSWORD_RESET_CONFIRM_FAIL
                });
            })
};


export const googleAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };

        // encodes into a url friendly format
        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        axios
            .post(`/auth/o/google-oauth2/?${formBody}`, config)
            .then(res => {
                    dispatch({
                        type: GOOGLE_AUTH_SUCCESS,
                        payload: res.data
                    });
                    dispatch(load_user());
                })
            .catch(err => {
                    dispatch({
                        type: GOOGLE_AUTH_FAIL
                    });
                })
    }
};

export const facebookAuthenticate = (state, code) => async dispatch => {
    if (state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        axios
            .post(`/auth/o/facebook/?${formBody}`, config)
            .then(res => {
                    dispatch({
                        type: FACEBOOK_AUTH_SUCCESS,
                        payload: res.data
                    });
                    dispatch(load_user());
                })
            .catch(err => {
                    dispatch({
                        type: FACEBOOK_AUTH_FAIL
                    });
                })
    }
};
