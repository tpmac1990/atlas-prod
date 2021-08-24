import { ACTIVATE_POPUP, DEACTIVATE_POPUP, IS_CONFIRMED, RESET_CONFIRMED } from './confirmPopupType'

export const ActivateConfirmPopup = values => {
    return {
        type: ACTIVATE_POPUP,
        payload: values
    }
}

export const DeactivateConfirmPopup = () => {
    return {
        type: DEACTIVATE_POPUP
    }
}

export const isConfirmed = () => {
    return {
        type: IS_CONFIRMED
    }
}

export const resetConfirmed = () => {
    return {
        type: RESET_CONFIRMED
    }
}
