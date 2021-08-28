import React, { useMemo, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { setData, isInfinityTable, clearData } from '../../redux';

import { ClientSideTable } from './ClientSideTable';
import { ServerSideTable } from './ServerSideTable';
import { COLUMNS } from './columns';


const DataTable = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const { popupTable } = useSelector(state => state)
    const { active_group } = popupTable
    const { ind_lst, data, loading, offset, limit, has_more, is_infinite } = popupTable[active_group]

    // If there are more rows than the limit then use the server side table instead of the client side table
    //  Use the useRef so once recorded as has_more it doesn't change
    const hasMoreRef = useRef(false)
    useEffect(() => {
        if (has_more && active_group){
            !hasMoreRef.current && dispatch(isInfinityTable({datagroup: active_group, is_infinite: true}))
            hasMoreRef.current = true
        }
    },[has_more])

                  
    // get data when table element is opened
    useEffect(() => {
        if ( active_group ){
            if ( ind_lst ){
                const datagroup = active_group === 'sites' ? 'Occurrence' : 'Tenement'
                dispatch(isInfinityTable({datagroup: active_group, is_infinite: false}))
                dispatch(clearData(active_group))
                dispatch(setData({
                                ind_lst: ind_lst, 
                                datagroup: datagroup, 
                                offset: 0, 
                                limit: limit, 
                                sortdict: {field: '', asc: false}, 
                                colfiltersdict: {},
                                globalfilter: ''
                            })) // sortdict does nothing here
            } else {
                history.goBack()
            }
        } 
    },[])

    const columns = useMemo(() => COLUMNS[active_group], [active_group])

    // go back and reset has_more to false. without reseting has_more, re-opening will 
    const backHandler = () => {
        history.goBack()
    }
    // the function that resets the table state when leaving the page is in App.js

    return (
        <div id='table-pg-main' className='cover-c1'>
            <div className='close-c3' onClick={backHandler}><span>x</span></div>
            { data === null ? 
            <h1>loading...</h1>
            : is_infinite
                ? <ServerSideTable data={data} columns={columns} />
                : <ClientSideTable data={data} columns={columns} />
            }
        </div>
    )
}

export default DataTable

