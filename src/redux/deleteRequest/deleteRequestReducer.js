import { TOGGLE_POPUP, SET_COMMENT, SET_INITIAL_COMMENT } from './deleteRequestType'

const initialState = {
    is_open: false,
    ind: null,
    comment: '',
    update: false
}

// Reducer function
const deleteRequestReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case TOGGLE_POPUP:
            const { is_open, ind } = action.payload
            return {
                ... state,
                is_open: is_open,
                ind: ind
            }
        case SET_INITIAL_COMMENT:
            return {
                ... state,
                comment: action.payload,
                update: action.payload == '' ? false : true
            }
        case SET_COMMENT:
            return {
                ... state,
                comment: action.payload
            }
        default: return state
    }
}

export default deleteRequestReducer