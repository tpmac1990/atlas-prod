import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateEditCell } from '../../../redux'


const EditTableManualEditCell = props => {

    const dispatch = useDispatch()
    
    const { defualtValue, id, datagroup, name, input_type } = props

    const [ value, setValue ] = useState(defualtValue)

    const BlurHandler = () => {
        dispatch(updateEditCell({key: id, field: 'percown', name: name, datagroup: datagroup,  value: value}))
    }

    return <input type={input_type} className='cell-edit-input' id={id} value={value} onChange={e => setValue(e.target.value)} onBlur={BlurHandler} autoComplete="off"></input>
}

export default EditTableManualEditCell