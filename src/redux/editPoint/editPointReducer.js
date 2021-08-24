import { SET_MARKER_LATLNGS, SET_SITE_IND_VALUE, RESET_STATE, TOGGLE_OFF, IS_CREATE_SITE } from './editPointType'

const initialState = {
    latlng: null,
    site_ind: null,
    act: null, // either 'move' or 'create'
    move_toggle: false, // used for the move to reactivate the button after esc is pressed
}

// Reducer function
const inactiveCoverReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_MARKER_LATLNGS:
            return {
                ... state,
                latlng: action.payload
            }
        case IS_CREATE_SITE:
            return {
                ... state,
                act: 'create'
            }
        case SET_SITE_IND_VALUE:
            const { site_ind, act } = action.payload
            return {
                ... state,
                site_ind: site_ind,
                act: act,
                move_toggle: true
            }
        case TOGGLE_OFF:
            return {
                ... state,
                move_toggle: false
            }
        case RESET_STATE:
            return initialState
        default: return state
    }
}

export default inactiveCoverReducer