import React, { lazy, Fragment, useState } from 'react'
import { Route, Link, useRouteMatch } from "react-router-dom";


const Feedback = lazy(() => import('./Feedback'));
const EmailDrop = lazy(() => import('./EmailDrop'));
const ContactInfo = lazy(() => import('./ContactInfo'));

const SubContactHome = () => {
    return (
        <h6 className='sub-header-tip'>Select one of the above options to begin ...</h6>
    )
}

function ContactHome() {

    let { path, url } = useRouteMatch();

    const [ active, setActive ] = useState(null)

    const clickHandler = e => {
        setActive(e.target.name)
    }
    
    return (
        <Fragment>
            <ul className="sub-header-c1">
                <li onClick={clickHandler} className={ active === 'feedback' ? 'active-sub-field' : '' }><Link to={`${url}/feedback`} name="feedback" >Feedback</Link></li>
                <li onClick={clickHandler} className={ active === 'maillist' ? 'active-sub-field' : '' }><Link to={`${url}/join-mail-list`} name="maillist" >Join Mail List</Link></li>
                <li onClick={clickHandler} className={ active === 'contactinfo' ? 'active-sub-field' : '' }><Link to={`${url}/contact-info`} name="contactinfo" >Contact Info</Link></li>
            </ul>   
            <div id="contact-groups">
                <Route path={`${path}/home`} component={SubContactHome} />
                <Route path={`${path}/feedback`} component={Feedback} />
                <Route path={`${path}/join-mail-list`} component={EmailDrop} />
                <Route path={`${path}/contact-info`} component={ContactInfo} />
            </div>
        </Fragment>
    )
}

export default ContactHome
