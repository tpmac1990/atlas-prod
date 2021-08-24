import { ACTIVATE_POPUP, DEACTIVATE_POPUP, IS_CONFIRMED, RESET_CONFIRMED } from './confirmPopupType'

const initialState = {
    visible: false,
    confirmed: false, // when true, this triggers useeffect in the original component that called the popup to deal with the confirm task
    msg: null,
    style: null,
    name: null // This is a unique name to know which popup is being used. this allows the point to be removed after exiting the 'site add/ confirm box
}

// Reducer function
const confirmPopupReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ACTIVATE_POPUP: 
            var { msg, style, name } = action.payload
            return {
                ... state,  
                visible: true,
                msg: msg,
                style: style,
                name: name
            }
        case DEACTIVATE_POPUP: 
            return {
                ... state,  
                visible: false,
                msg: null,
                style: null,
            }
        case IS_CONFIRMED:
            return {
                ... state,
                confirmed: true,
                visible: false,
                msg: null,
                style: null,
            }
        case RESET_CONFIRMED:
            return {
                ... state,
                confirmed: false
            }
        default: return state
    }
}

export default confirmPopupReducer