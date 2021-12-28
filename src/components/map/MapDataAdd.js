import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { storeSpatialData, setMapIsLoading, setPopupMessage } from '../../redux'
import ToolTip from '../reusable/tooltip/ToolTip'


const ButtonWithToolTip = () => {

    const dispatch = useDispatch()

    const { filterSelection, filterDirection, authenticate } = useSelector(state => state)
    const { filterDataset } = filterDirection
    const { map_data, related, input, map_infinity } = filterSelection
    const { isAuthenticated } = authenticate

    const ClickHandler = e => {
        const { offset, limit, loading } = map_infinity
        if (!isAuthenticated){
            dispatch(setPopupMessage({message: 'Log in to enable this feature', type: 'warning', style: 'warning-map'}))
            return
        }
        if ( !loading ){
            const name = filterDataset === 'Tenement' ? 'tens' : 'occs'
            dispatch(setMapIsLoading())
            // fetch the next lot of data to add to the map. pass in the current extent so the map bounds adjusts to the current & new data
            dispatch(storeSpatialData({name: name, dataset: filterDataset, input: input, related: related, 
                                        offset: offset, limit: limit, current_extent: map_data.extent}))
        }
    }

    return (
        <div>
            <ToolTip styles='left-1' content='display more data'>
                <button className='btn-c6' onClick={ClickHandler}>
                    <span className="material-icons map-btn-icons">add_circle</span>
                </button>
            </ToolTip>
        </div>
    )
}


const MapDataAdd = () => {

    const { map_infinity } = useSelector(state => state.filterSelection)

    return (
        <div className='add-data-area'>
            {(map_infinity.hasMore && map_infinity.total_count)
                ? <ButtonWithToolTip />
                : null
            }
        </div>
      )
}

export default MapDataAdd
