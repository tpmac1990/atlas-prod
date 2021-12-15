import { STORE_EDIT_HANDLER, STORE_RECTANGLE_LAYER, FILTER_DRAW_TOGGLE, SET_DRAW_TRIGGER_SOURCE } from './leafletDrawType'

const initialState = {
    editHandlers: null,
    rectangleRef: null,
    filterDrawToggle: false, // If the rectangle is toggled from the filter in mobile mode then this is used to toggle the filter before and after drawing the rectangle on the map
    drawTrigger: null // used to determine if a submit is run on completion of the draw or not. either 'filter' or 'map'
}


// Reducer function
const leafletDrawReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case STORE_EDIT_HANDLER: 
            return {
                ... state,
                editHandlers: action.payload
            }
        case STORE_RECTANGLE_LAYER:
            return {
                ... state,
                rectangleRef: action.payload
            }
        case FILTER_DRAW_TOGGLE:
            return {
                ... state,
                filterDrawToggle: action.payload
            }
        case SET_DRAW_TRIGGER_SOURCE:
            return {
                ... state,
                drawTrigger: action.payload
            }
        default: return state
    }
}

export default leafletDrawReducer
