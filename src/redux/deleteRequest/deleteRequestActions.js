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

    axios
        .get(`/delete-request/?user_name=${user_name}&ind=${ind}`)
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

    const body = JSON.stringify({user_name, ind, comment});

    axios
        .post(`/delete-request/`, body)
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