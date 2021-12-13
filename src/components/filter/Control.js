import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterDataset, resetFilterGroupState, resetFilterSelection } from '../../redux/'
import BasicSelect from '../reusable/basicSelect/BasicSelect'


function Control() {

    const dispatch = useDispatch()

    const{ filterDataset } = useSelector(state => state.filterDirection)

    const combinedHandler = () => {
        dispatch(resetFilterGroupState())
        dispatch(resetFilterSelection())
    }

    const datasetHandler = datasetName => {
        combinedHandler()
        dispatch(setFilterDataset(datasetName))
    }

    // key: the value returned and used to filter data in the backend
    // value: display value
    const rowsObj = {
        'Tenement':'Titles',
        'Occurrence':'Sites'
    }

    return (
        <div id='ctrl-bar'>
            <BasicSelect 
                styles='infinite-select-c3' 
                placeholder='Select a dataset to filter'
                rows={rowsObj}
                value={filterDataset}
                handler={datasetHandler}
            />
        </div>
    )

    // ribbon checkbox previously used. Was not intuitive enough, users didn't assume to click it
    // return (
    //     <div id='ctrl-bar'>
    //         <div className='radiobar-c1 radiobar-s1'>
    //             <input checked={ filterDataset == 'Tenement' } id='Tenementctrl' type="radio" name='Tenement' onChange={datasetHandler}/>
    //             <label htmlFor='Tenementctrl'>Titles</label>
    //             <input checked={ filterDataset == 'Occurrence' } id='Occurrencectrl' type="radio" name='Occurrence' onChange={datasetHandler}/>
    //             <label htmlFor='Occurrencectrl'>Sites</label>
    //         </div>
    //     </div>
    // )

}

export default Control