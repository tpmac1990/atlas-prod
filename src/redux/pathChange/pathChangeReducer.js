import { SET_NEW_PATH, NAVIGATE_TO_PATH } from './pathChangeType'


const initialState = {
    current_path: '/',
    previous_path: '/',
    nav_path: '/'
}


const pathChangeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_NEW_PATH:
            return {
                current_path: action.payload,
                previous_path: state.current_path
            }
        case NAVIGATE_TO_PATH:
            return {
                current_path: action.payload,
                previous_path: state.current_path,
                nav_path: action.payload
            }
        default: return state
    }
}

export default pathChangeReducer
