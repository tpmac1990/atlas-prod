import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { getSiteData, triggerElement, setFilterValues } from '../../../redux';
import DetailTableC1 from './DetailTableC1';
import SingleColumnTableC1 from './SingleColumnTableC1';
import Loading from '../../loading/Loading';
import { TitleComponent } from './TitleComponent';

import { site_objs } from './detailConfigs'


function SubSiteDetail({ match }){

    const { id } = match.params

    const dispatch = useDispatch()
    const history = useHistory();

    const { site: value } = useSelector(state => state.detailSelection)

    const { RelatedTitlesDict, NameDict, TypeDict, StatusDict, LocationDict, MaterialsDict, AlternateSourceDict } = site_objs

    useEffect(() => {
        dispatch(getSiteData(id))    
    }, [id])

    useEffect(() => {
        value && dispatch(setFilterValues({ind_lst: value.tenements.map(x => x.ind), datagroup: 'titles'}))
    }, [value])

    // call the related titles table
    const tableHandler = e => {
        dispatch(triggerElement(e.target.name))
        history.push('/table/')
    }


    if (value == null){
        return <Loading />
    } else {
        return (
            <div className="detail-info-c1">
                <TitleComponent group='site' title={value.ind} index={value.ind} />
                <div className='list-table-btn-lng'>
                    <button className='btn-c5' name='titles' onClick={tableHandler} >Related Titles Table</button>
                </div>
                <SingleColumnTableC1 dict={NameDict} value={value} />
                <SingleColumnTableC1 dict={TypeDict} value={value} />
                <SingleColumnTableC1 dict={StatusDict} value={value} />
                <SingleColumnTableC1 dict={LocationDict} value={value} />
                <SingleColumnTableC1 dict={MaterialsDict} value={value} />
                <SingleColumnTableC1 dict={AlternateSourceDict} value={value} />
                <DetailTableC1 dict={RelatedTitlesDict} value={value} />
            </div>
        )
    }
}

export default SubSiteDetail
