import { SET_MAP_POPUP_DATA, SET_POPUP_TARGET, SET_POPUP_STATUS, SET_PREVIOUS_TARGET, RESET_POPUP_DATA } from './mapPopupType'

const initialState = {
    data: {},
    target: null,
    dataset: null,
    active_latlang: null, // use for point highlight and popup control
    prev_target: null, // use for polygon highlight
}

const mapPopupReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_MAP_POPUP_DATA: 
            const { data, dataset } = action.payload
            return {
                ...state,
                    data: data,
                    dataset: dataset
            }
        case SET_POPUP_TARGET:
            return {
                ...state,
                    target: action.payload
            }
        // setting the latlng will highlight the clicked site and reveal the popup
        case SET_POPUP_STATUS:
            return {
                ...state,
                    active_latlang: action.payload
            }
        // set the target as prevous target so the colour can be reverted back when another polygon is clicked
        case SET_PREVIOUS_TARGET:
            return {
                ...state,
                    prev_target: action.payload
            }
        case RESET_POPUP_DATA:
            return {
                ...state,
                    dataset: null,
                    active_latlang: null,
                    target: null
            }
        default: return state
    }
}

export default mapPopupReducer
