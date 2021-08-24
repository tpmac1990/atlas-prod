import { SET_SCREEN_SIZE } from './sizeControlType'

export const setScreenSize = size => {
    return {
        type: SET_SCREEN_SIZE,
        payload: size
    }
}