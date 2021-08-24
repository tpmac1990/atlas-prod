import { combineReducers } from 'redux'
import filterGroupReducer from './filterGroup/filterGroupReducer'
import filterSelectionReducer from './filterSelection/filterSelectionReducer'
import filterDirectionReducer from './filterDirection/filterDirectionReducer'
import leafletDrawReducer from './leafletDraw/leafletDrawReducer'
import messageHandlerReducer from './messageHandler/messageHandlerReducer'
import detailSelectionReducer from './detailSelection/detailSelectionReducer'
import popupTableReducer from './popupTable/popupTableReducer'
import confirmPopupReducer from './confirmPopup/confirmPopupReducer'
import editPointReducer from './editPoint/editPointReducer'
import inactiveCoverReducer from './inactiveCover/inactiveCoverReducer'
import dropdownReducer from './dropdown/dropdownReducer'
import dataEditReducer from './dataEdit/dataEditReducer'
import checkBoxListReducer from './checkBoxList/checkBoxListReducer'
import mapPopupReducer from './mapPopup/mapPopupReducer'
import userDataReducer from './userData/userDataReducer'
import sizeControlReducer from './sizeControl/sizeControlReducer'

const rootReducer = combineReducers({
    filterGroup: filterGroupReducer,
    filterSelection: filterSelectionReducer,
    filterDirection: filterDirectionReducer,
    leafletDraw: leafletDrawReducer,
    messageHandler: messageHandlerReducer,
    detailSelection: detailSelectionReducer,
    popupTable: popupTableReducer,
    confirmPopup: confirmPopupReducer,
    editPoint: editPointReducer,
    inactiveCover: inactiveCoverReducer,
    dropdown: dropdownReducer,
    dataEdit: dataEditReducer,
    checkBoxList: checkBoxListReducer,
    mapPopup: mapPopupReducer,
    userData: userDataReducer,
    sizeControl: sizeControlReducer
})

export default rootReducer