import { SET_FILTER_VALUES, TRIGGER_ELEMENT, SET_DATA, IS_INFINITY_TABLE, CLEAR_DATA, RESET_POPUP_TABLE, TOGGLE_TABLE_DATASET, ATTEMPT_TABLE_TOGGLE } from './popupTableType'

const tableState = {
    ind_lst: null,
    data: null,
    has_more: false,
    loading: false,
    offset: 0,
    limit: 20,
    is_infinite: false
}

// independent state for titles and sites is required
const initialState = {
    active_group: 'sites', // can't be blank
    both_available: false,
    attempt: false, // toggled to call the method that decides if and which table to open
    titles: tableState,
    sites: tableState,
}

const popupTableReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case TOGGLE_TABLE_DATASET:
            return {
                ... state,
                both_available: action.payload
            }
        case ATTEMPT_TABLE_TOGGLE:
            return {
                ... state,
                attempt: !state.attempt
            }
        case SET_FILTER_VALUES: 
            var { datagroup, ind_lst } = action.payload
            return {
                ...state,
                [datagroup]: {
                    ...state[datagroup],
                    ind_lst: ind_lst
                }
            }
        case TRIGGER_ELEMENT:
            var datagroup = action.payload
            return {
                ...state,
                active_group: datagroup,
            }
        case IS_INFINITY_TABLE:
            var { datagroup, is_infinite } = action.payload
            return {
                ...state,
                [datagroup]: {
                    ...state[datagroup],
                    is_infinite: is_infinite,
                }
            }
        case CLEAR_DATA:
            var datagroup = action.payload
            return {
                ...state,
                [datagroup]: {
                    ...state[datagroup],
                    data: null
                }
            }
        case SET_DATA:
            var { datagroup, offset } = action.payload
            var datagroup = datagroup === 'Tenement' ? 'titles' : 'sites'
            return {
                ...state,
                [datagroup]: {
                    ...state[datagroup],
                    data: (state[datagroup].data == null || offset === 0) ? action.payload['data'] : [...state[datagroup].data,...action.payload['data']],
                    has_more: action.payload['has_more'],
                }
            }
        case RESET_POPUP_TABLE:
            return {
                ... initialState,
                both_available: state.both_available,
                attempt: state.attempt
            }            
        default: return state
    }
}

export default popupTableReducer