import { STORE_EDIT_HANDLER, TOGGLE_MAP_DRAW_BUTTON } from './leafletDrawType'

export const storeEditHandlers = handler => {
    return {
        type: STORE_EDIT_HANDLER,
        payload: handler
    }
}

export const toggleMapDrawButton = action => {
    return {
        type: TOGGLE_MAP_DRAW_BUTTON,
        payload: action
    }
}
