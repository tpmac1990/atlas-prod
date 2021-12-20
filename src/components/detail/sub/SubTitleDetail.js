import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { getTitleData, setFilterValues, triggerElement } from '../../../redux';
import DetailTableC1 from './DetailTableC1';
import SingleColumnTableC1 from './SingleColumnTableC1';
import Loading from '../../loading/Loading';
import { TitleComponent } from './TitleComponent';
// import Comments from './Comments' will eventually implement this
import { title_objs } from './detailConfigs'


function SubTitleDetail({ match }){

    const { id } = match.params

    const dispatch = useDispatch()
    const history = useHistory();

    const { title: value } = useSelector(state => state.detailSelection)

    const { DateDict, LocationDict, TypeDict, StatusDict, MaterialsDict, AlternateSourceDict, ParentsDict, HoldersDict } = title_objs

    useEffect(() => {
        dispatch(getTitleData(id))    
    }, [id])


    useEffect(() => {
        value && dispatch(setFilterValues({ind_lst: value.occurrence.map(x => x.ind), datagroup: 'sites'}))
    }, [value])

    // call the related sites table
    const tableHandler = e => {
        dispatch(triggerElement(e.target.name))
        history.push('/table/')
    }


    if (value == null){
        return <Loading />
    } else {
        return (
            <div className="detail-info-c1">
                <TitleComponent group='title' title={value.ind} index={value.ind} />
                <div className='list-table-btn-lng'>
                    <button className='btn-c5' name='sites' onClick={tableHandler} >Related Sites Table</button>
                </div>
                {/* <Comments value={value} /> */}
                <SingleColumnTableC1 dict={DateDict} value={value} />
                <SingleColumnTableC1 dict={LocationDict} value={value} />
                <SingleColumnTableC1 dict={TypeDict} value={value} />
                <SingleColumnTableC1 dict={StatusDict} value={value} />
                <SingleColumnTableC1 dict={MaterialsDict} value={value} />
                <SingleColumnTableC1 dict={AlternateSourceDict} value={value} />
                <SingleColumnTableC1 dict={ParentsDict} value={value} />
                <SingleColumnTableC1 dict={ParentsDict} value={value} />
                <DetailTableC1 dict={HoldersDict} value={value} />
                {/* <DetailTableC1 dict={RelatedSitesDict} value={value} /> this is not used */}
            </div>
        )
    }
}

export default SubTitleDetail
