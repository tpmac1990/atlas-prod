import React, { lazy } from 'react'
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";

import AuthenticationCheck from '../authentication/AuthenticationCheck'


const TitleDetail = lazy(() => import('./TitleDetail'));
const SiteDetail = lazy(() => import('./SiteDetail'));
const HolderDetail = lazy(() => import('./HolderDetail'));

const SubHomeDetail = () => {
    return (
        <h6 className='sub-header-tip'>Select one of the above options to begin a detailed search ...</h6>
    )
}

function HomeDetail() {

    const { path, url } = useRouteMatch();
    const { pathname } = useLocation();

    // use the pathname to determine which sub-group to underline
    return (
        <AuthenticationCheck msg='Log in required to view detailed information'>
            <ul className="sub-header-c1">
                <li className={ pathname.includes('title') ? 'active-sub-field' : '' }><Link to={`${url}/title`} name="title" >Title</Link></li>
                <li className={ pathname.includes('site') ? 'active-sub-field' : '' }><Link to={`${url}/site`} name="site" >Site</Link></li>
                <li className={ pathname.includes('holder') ? 'active-sub-field' : '' }><Link to={`${url}/holder`} name="holder" >Holder</Link></li>
            </ul>   
            <div id="detail-groups">
                <Route path={`${path}/home`} component={SubHomeDetail} />
                <Route path={`${path}/title`} component={TitleDetail} />
                <Route path={`${path}/site`} component={SiteDetail} />
                <Route path={`${path}/holder`} component={HolderDetail} />
            </div>
        </AuthenticationCheck>
    )
}

export default HomeDetail
