import { SET_MARKER_LATLNGS, SET_SITE_IND_VALUE, RESET_STATE, TOGGLE_OFF, IS_CREATE_SITE } from './editPointType'
import { UPDATE_SITE_COORDINATES } from '../filterSelection/filterSelectionType'
import { SET_POPUP_MESSAGE } from '../messageHandler/messageHandlerType'
import axios from 'axios';


export const setMarkerLatLngs = coordinates => {
    return {
        type: SET_MARKER_LATLNGS,
        payload: coordinates
    }
}

export const resetCreatePntState = () => {
    return {
        type: RESET_STATE
    }
}

// sets the 'act' to 'create'
export const setCreateSite = () => {
    return {
        type: IS_CREATE_SITE
    }
}


export const createSite = latlng => dispatch => {
    axios
        .post('/create-site/',latlng)
        .then(res => {
                // set the new coordinates in the data to change the location of the point in the map
                dispatch({
                    type: SET_SITE_IND_VALUE,
                    payload: {site_ind: res.data, act: 'create'}
                });
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: `Site '${res.data}' was created successfully`, type: 'success', style: 'success-map'}
                });
            })
        .catch(err => {
            console.log(err)
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "An error occurred while creating a new site. Try again later", type: 'error', style: 'error-map'}
                });
            });
}

export const moveSite = values => dispatch => {
    axios
        .post('/move-site/',values)
        .then(res => {
                dispatch({
                    type: UPDATE_SITE_COORDINATES,
                    payload: values
                });
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: `Site '${res.data}' was moved successfully`, type: 'success', style: 'success-map'}
                });
            })
        .catch(err => {
                console.log(err)
                dispatch({
                    type: SET_POPUP_MESSAGE,
                    payload: {message: "An error occurred while attempting to move the site. Try again later", type: 'error', style: 'error-map'}
                });
            });
}


export const triggerPntMove = ind => {
    return {
        type: SET_SITE_IND_VALUE,
        payload: { site_ind: ind, act: 'move' }
    }
}

// needed to reset the move site button so it will work after esc is pressed
export const toggleOffSiteMove = () => {
    return {
        type: TOGGLE_OFF
    }
}

