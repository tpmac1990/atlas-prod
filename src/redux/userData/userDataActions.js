import { SET_POPUP_MESSAGE } from '../messageHandler/messageHandlerType'
import axios from 'axios'


export const saveUserEmail = values => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': localStorage.getItem('access')
        }
    };
    axios
        .post("/create-keep-posted/", values, config)
        .then(res => {
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "You are now on the mail list!", type: 'success', style: 'success-fixed-user'}
                });
            })
        .catch(err => {
                // console.log(err)
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "Sorry, an error has occurred. Please try again later", type: 'error', style: 'error-fixed-user'}
                });
            });
}


export const saveUserFeedback = values => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': localStorage.getItem('access')
        }
    };
    axios
        .post("/create-feedback/", values, config)
        .then(res => {
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "Thanks for your feedback!", type: 'success', style: 'success-fixed-user'}
                });
            })
        .catch(err => {
                // console.log(err)
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "Sorry, an error has occurred. Please try again later", type: 'error', style: 'error-fixed-user'}
                });
            });
}
