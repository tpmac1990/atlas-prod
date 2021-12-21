import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setPopupMessage, attemptTableToggle, setFilterValues, triggerElement, toggleTableDataset } from '../../redux'
import ToolTip from '../reusable/tooltip/ToolTip'

const ListView = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const { filterDirection, popupTable, filterSelection } = useSelector(state => state)
    const { filterDataset } = filterDirection
    const { attempt } = popupTable
    const { occs, tens } = filterSelection.map_data

    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current = false
            return
        }

        // Add the ind values from the map to the popupTable state
        const dict = {titles: null, sites: null}
        const groups = [[tens,'titles'],[occs,'sites']];
        groups.forEach(group => {
            if ( group[0].features.length !=0 ) {
                var arr = group[0].features.map(row => {
                    return row.properties.pk
                })
                dispatch(setFilterValues({ind_lst: arr, datagroup: group[1]}))
                dict[group[1]] = arr.length != 0
            }
        })
        // If there are ind vals for both titles and sites then display popup box to allow the user to select the data to view.
        const btitle = dict.titles
        const bsites = dict.sites
        if ( !btitle && !bsites ){
            // popup error message when no data has been selected
            dispatch(setPopupMessage({message: "Your search has returned no data to display", type: 'warning', style: 'warning-map'}))
        } else if ( btitle && bsites ){
            // toggles the popup which allows the user to select the dataset to display in table form
            dispatch(toggleTableDataset(true))
        } else {
            // if only one datagroup is on the map, then activate the incative page layer and show table
            const datagroup = btitle ? 'titles' : 'sites'
            dispatch(triggerElement(datagroup))
            history.push('/table/')
        }

    },[attempt])


    // Handles the events for dealing with listing the map results in a table
    const listHandler = () => {
        dispatch(attemptTableToggle())
    }

    return (
        filterDataset != ''
        ? (
            <div id='mobile-draw'>
                <ToolTip styles='left-1' content='list view'>
                    <button id='mobile-draw-btn' className='btn-c6' onClick={listHandler}>
                        <span className="material-icons map-btn-icons">list</span>
                    </button>
                </ToolTip>
            </div>
        ) 
        : null
    )
}

export default ListView
