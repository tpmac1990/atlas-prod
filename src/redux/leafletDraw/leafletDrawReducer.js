import { STORE_EDIT_HANDLER, TOGGLE_MAP_DRAW_BUTTON } from './leafletDrawType'

const initialState = {
    editHandlers: null,
    mdb_active: false
}


// Reducer function
const leafletDrawReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case STORE_EDIT_HANDLER: 
            return {
                ... state,
                editHandlers: action.payload
            }
        case TOGGLE_MAP_DRAW_BUTTON:
            return {
                ... state,
                mdb_active: action.payload
            }
        default: return state
    }
}

export default leafletDrawReducer
