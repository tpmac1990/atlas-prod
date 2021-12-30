// import React, { lazy, Fragment } from 'react'
// import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";


// const Feedback = lazy(() => import('./Feedback'));
// const EmailDrop = lazy(() => import('./EmailDrop'));
// const ContactInfo = lazy(() => import('./ContactInfo'));

// const SubContactHome = () => {
//     return (
//         <h6 className='sub-header-tip'>Select one of the above options to begin ...</h6>
//     )
// }

// function ContactHome() {

//     const { path, url } = useRouteMatch();
//     const { pathname } = useLocation();

//     return (
//         <Fragment>
//             <ul className="sub-header-c1">
//                 <li className={ pathname.includes('feedback') ? 'active-sub-field' : '' }><Link to={`${url}/feedback`} name="feedback" >Feedback</Link></li>
//                 <li className={ pathname.includes('join-mail-list') ? 'active-sub-field' : '' }><Link to={`${url}/join-mail-list`} name="maillist" >Join Mail List</Link></li>
//                 <li className={ pathname.includes('contact-info') ? 'active-sub-field' : '' }><Link to={`${url}/contact-info`} name="contactinfo" >Contact Info</Link></li>
//             </ul>   
//             <div id="contact-groups">
//                 <Route path={`${path}/home`} component={SubContactHome} />
//                 <Route path={`${path}/feedback`} component={Feedback} />
//                 <Route path={`${path}/join-mail-list`} component={EmailDrop} />
//                 <Route path={`${path}/contact-info`} component={ContactInfo} />
//             </div>
//         </Fragment>
//     )
// }

// export default ContactHome
