import React, { lazy, useEffect } from 'react'
import { Route, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux'

import SubHolderDetail from './sub/SubHolderDetail';
import InfinitySelect from '../reusable/infinitySelect/InfinitySelect'
import { useHistory } from "react-router-dom";

const HolderEdit = lazy(() => import('./edit/HolderEdit'));


function HolderDetail(){

    let history = useHistory();

    const { dropdown } = useSelector(state => state)

    let { path, url } = useRouteMatch();

    // will direct to the detail page when the selection is changed in the holder selection
    useEffect(() => {
        dropdown.active_dropdown == 'holder_search' && dropdown.holder_search && dropdown.holder_search.selected.key !== '' && history.push(`${url}/${dropdown.holder_search.selected.key}`)
    },[dropdown])

    const holderSelect = {name: 'holder_search', endpoint: 'site-group', model: 'Holder', key: '_id', label: 'name', styles: 'infinite-select-c2'}

    return (
        <div>
            <h4 className="header-c1">Search For A Title Holder:</h4>
            <div className="lookup-c1">
                <div className='holder-infinity'>
                    <InfinitySelect dict={holderSelect} />
                </div>
            </div>
            <hr/>
            <Route exact path={`${path}/:id`} component={SubHolderDetail} />
            <Route exact path={`${path}/edit/:id`} component={HolderEdit} />
        </div>
    )
}

export default HolderDetail
