import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { getHolderData, setFilterValues, triggerElement } from '../../../redux';
import DetailTableC1 from './DetailTableC1';
import SingleColumnTableC1 from './SingleColumnTableC1';
import Loading from '../../loading/Loading';
import { TitleComponent } from './TitleComponent';

import { holder_objs } from './detailConfigs'


function SubHolderDetail({ match }){

    const { id } = match.params

    const dispatch = useDispatch()
    const history = useHistory();

    const { holder: value } = useSelector(state => state.detailSelection)

    const { SubsidiariesDict, OwnersDict, TickerDict, BasicDict } = holder_objs

    useEffect(() => {
        dispatch(getHolderData(id))    
    }, [id])

    useEffect(() => {
        if (value) {
            dispatch(setFilterValues({ind_lst: value.title_count, datagroup: 'titles'}))
            dispatch(setFilterValues({ind_lst: value.site_count, datagroup: 'sites'}))
        }
    }, [value])

    // call the related sites table
    const tableHandler = item => {
        dispatch(triggerElement(item))
        history.push('/table/')
    }


    if (value == null){
        return <Loading />
    } else {
        return (
            <div className="detail-info-c1">
                <TitleComponent group='holder' title={value.holder_name} index={id} />
                <div className='list-table-btn-group'>{['titles','sites'].map(item => {
                    return <button key={item} className='btn-c5' onClick={() => tableHandler(item)} >{item.charAt(0).toUpperCase() + item.slice(1)} List Table</button>
                })}</div>
                <SingleColumnTableC1 dict={BasicDict} value={value} />
                <DetailTableC1 dict={TickerDict} value={value} />
                <DetailTableC1 dict={OwnersDict} value={value} />
                <DetailTableC1 dict={SubsidiariesDict} value={value} />
            </div>
        )
    }
}

export default SubHolderDetail
