import { SET_NEW_PATH } from './pathChangeType'


export const setNewPathname = pathname => {
    return {
        type: SET_NEW_PATH,
        payload: pathname
    }
}