import React, { lazy, Fragment, useState } from 'react'
import { Route, Link, useRouteMatch } from "react-router-dom";


const Documentation = lazy(() => import('./Documentation'));
const Demonstration = lazy(() => import('./Demonstration'));

const SubHomeInstruction = () => {
    return (
        <h6 className='sub-header-tip'>Select one of the above options to begin ...</h6>
    )
}

function HomeInstruction() {

    let { path, url } = useRouteMatch();

    const [ active, setActive ] = useState(null)

    const clickHandler = e => {
        setActive(e.target.name)
    }
    
    return (
        <Fragment>
            <ul className="sub-header-c1">
                <li onClick={clickHandler} className={ active === 'docs' ? 'active-sub-field' : '' }><Link to={`${url}/docs`} name="docs" >Documentation</Link></li>
                <li onClick={clickHandler} className={ active === 'demos' ? 'active-sub-field' : '' }><Link to={`${url}/demos`} name="demos" >Demonstrations</Link></li>
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
