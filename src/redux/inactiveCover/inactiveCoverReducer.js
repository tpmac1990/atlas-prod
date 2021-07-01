import { TOGGLE_FULL_SCREEN_INACTIVE } from './inactiveCoverType'

const initialState = {
    is_active: false,
    count: 0,
}

// Reducer function
const inactiveCoverReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case TOGGLE_FULL_SCREEN_INACTIVE: 
            return {
                ... state,  
                is_active: action.payload ? true : state.count === 1 ? false : true,
                count: action.payload ? state.count + 1 : state.count - 1
            }
        default: return state
    }
}

export default inactiveCoverReducer