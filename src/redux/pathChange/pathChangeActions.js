import { SET_NEW_PATH, NAVIGATE_TO_PATH } from './pathChangeType'


export const setNewPathname = pathname => {
    return {
        type: SET_NEW_PATH,
        payload: pathname
    }
}

export const navigateToPath = pathname => {
    return {
        type: NAVIGATE_TO_PATH,
        payload: pathname
    }
}