import React, { lazy, useEffect } from 'react'
import { Route, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux'

import SubSiteDetail from './sub/SubSiteDetail';
import { useHistory } from "react-router-dom";
import InfinitySelect from '../reusable/infinitySelect/InfinitySelect'

const SiteEdit = lazy(() => import('./edit/SiteEdit'));


function SiteDetail(){

    let history = useHistory();

    const { dropdown } = useSelector(state => state)

    let { path, url } = useRouteMatch();

    // will direct to the detail page when the selection is changed in the holder dropdown at the top of the page
    useEffect(() => {
        dropdown.active_dropdown == 'site_search' && dropdown.site_search && dropdown.site_search.selected.key !== '' && dropdown.active_dropdown == 'site_search' && history.push(`${url}/${dropdown.site_search.selected.key}`)
    },[dropdown])


    const SiteSelect = {name: 'site_search', endpoint: 'site-group', model: 'Occurrence', key: 'ind', label: 'ind', styles: 'infinite-select-c2'}

    return (
        <div>
            <h4 className="header-c1">Search For A Site By ID:</h4>
            <div className="lookup-c1">
                <div className='ind-infinity'>
                    <InfinitySelect dict={SiteSelect} />
                </div>
            </div><hr/>
            <Route exact path={`${path}/:id`} component={SubSiteDetail} />
            <Route exact path={`${path}/edit/:id`} component={SiteEdit} />
        </div>
    )
}

export default SiteDetail
