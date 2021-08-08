import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterDataset, resetFilterGroupState, resetFilterSelection } from '../../redux/'


function Control() {

    const dispatch = useDispatch()

    const{ filterDataset } = useSelector(state => state.filterDirection)

    const combinedHandler = () => {
        dispatch(resetFilterGroupState())
        dispatch(resetFilterSelection())
    }

    function datasetHandler(e){
        combinedHandler()
        dispatch(setFilterDataset(e.target.name))
    }

    return (
        <div id='ctrl-bar'>
            <div className='radiobar-c1 radiobar-s1'>
                <input checked={ filterDataset == 'Tenement' } id='Tenementctrl' type="radio" name='Tenement' onChange={datasetHandler}/>
                <label htmlFor='Tenementctrl'>Titles</label>
                <input checked={ filterDataset == 'Occurrence' } id='Occurrencectrl' type="radio" name='Occurrence' onChange={datasetHandler}/>
                <label htmlFor='Occurrencectrl'>Sites</label>
            </div>
        </div>
    )

}

export default Control