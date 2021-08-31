import React, { lazy, Fragment } from 'react'
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";


const Documentation = lazy(() => import('./Documentation'));
const Demonstration = lazy(() => import('./Demonstration'));

const SubHomeInstruction = () => {
    return (
        <h6 className='sub-header-tip'>Select one of the above options to begin ...</h6>
    )
}

function HomeInstruction() {

    const { path, url } = useRouteMatch();
    const { pathname } = useLocation();

    return (
        <Fragment>
            <ul className="sub-header-c1">
                <li  className={ pathname.includes('docs') ? 'active-sub-field' : '' }><Link to={`${url}/docs`} name="docs" >Documentation</Link></li>
                <li  className={ pathname.includes('demos') ? 'active-sub-field' : '' }><Link to={`${url}/demos`} name="demos" >Demonstrations</Link></li>
            </ul>   
            <div id="contact-groups">
                <Route path={`${path}/home`} component={SubHomeInstruction} />
                <Route path={`${path}/docs`} component={Documentation} />
                <Route path={`${path}/demos`} component={Demonstration} />
            </div>
        </Fragment>
    )
}

export default HomeInstruction
