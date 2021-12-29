import { SET_MAP_POPUP_DATA, SET_POPUP_TARGET, SET_POPUP_STATUS, SET_PREVIOUS_TARGET, RESET_POPUP_DATA } from './mapPopupType'
import axios from 'axios';


export const getPopupData = dict => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': localStorage.getItem('access')
        }
    }; 
    const { pk, dataset } = dict
    axios
    .get(`/map-popup/${pk}/?dataset=${dataset}`,config)
    .then(res => {
            dispatch({
                type: SET_MAP_POPUP_DATA,
                payload: {data: res.data, dataset: dataset}
            });
        })
    .catch(err => {
        console.log(err)
            // dispatch({
            //     type: DETAIL_INCORRECT_COUNT,
            // });
        });
}


export const setPopupTarget = target => {
    return {
        type: SET_POPUP_TARGET,
        payload: target
    }
}

// pass in latlng to make popup active and site highlighted, or null to make inactive and remove highlighted site
export const setPopupStatus = value => {
    return {
        type: SET_POPUP_STATUS,
        payload: value
    }
}


export const setPreviousTarget = target => {
    return {
        type: SET_PREVIOUS_TARGET,
        payload: target
    }
}

// reset the necessary fields to close either title or site popup and remove the active feature highlight styling
export const closeMapPopup = () => {
    return {
        type: RESET_POPUP_DATA
    }
}
