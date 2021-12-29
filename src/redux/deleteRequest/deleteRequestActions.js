import { TOGGLE_POPUP, SET_COMMENT, SET_INITIAL_COMMENT } from './deleteRequestType'
import axios from 'axios';


export const togglePopup = ({is_open, ind}) => {
    return {
        type: TOGGLE_POPUP,
        payload: {is_open, ind}
    }
}

export const setComment = comment => {
    return {
        type: SET_COMMENT,
        payload: comment
    }
}


export const retieveExistingRequest = ({user_name,ind}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem('access')
        }
    }; 

    axios
        .get(`/delete-request/?user_name=${user_name}&ind=${ind}`, config)
        .then(res => {
            dispatch({
                type: SET_INITIAL_COMMENT,
                payload: res.data
            });
            })
        .catch(err => {
            console.log(err)
            });
}


export const submitDeleteRequest = ({user_name,ind,comment}) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': localStorage.getItem('access')
        }
    };

    const body = JSON.stringify({user_name, ind, comment});

    axios
        .post(`/delete-request/`, body, config)
        .then(res => {
            dispatch({
                type: TOGGLE_POPUP,
                payload: {is_open: false, ind: null}
            });
            })
        .catch(err => {
            console.log(err)
            });
}