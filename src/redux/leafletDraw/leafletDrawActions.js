import { STORE_EDIT_HANDLER, STORE_RECTANGLE_LAYER, FILTER_DRAW_TOGGLE, SET_DRAW_TRIGGER_SOURCE } from './leafletDrawType'

export const storeEditHandlers = handler => {
    return {
        type: STORE_EDIT_HANDLER,
        payload: handler
    }
}

export const storeFilterRectangleLayer = layer => {
    return {
        type: STORE_RECTANGLE_LAYER,
        payload: layer
    }
}

export const toggleFilterDraw = action => {
    return {
        type: FILTER_DRAW_TOGGLE,
        payload: action
    }
}

export const setDrawTriggerSource = source => {
    return {
        type: SET_DRAW_TRIGGER_SOURCE,
        payload: source
    }
}
