import { SET_SCREEN_SIZE } from './sizeControlType'


const initialState = {
    is_large: true
}

const sizeControlReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_SCREEN_SIZE: 
            return {
                ...state,
                is_large: action.payload
            }
        default: return state
    }
}

export default sizeControlReducer