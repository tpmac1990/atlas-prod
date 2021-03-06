import 'regenerator-runtime/runtime' // required for using react-table wwith global filter from the map component.
import React, { Suspense, lazy, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';

import Header from './header/header';
import Loading from './loading/Loading';
import checkRequests from "./HOC/CheckRequests";
import MapContent from './map/MapContent';
import ConfirmBox from './reusable/confirm/ConfirmBox'
import RequestDelete from './map/RequestDelete'
import TableSelectPopup from './filter/TableSelectPopup'
import { PopupTable } from './popups/PopupTable';
import { CoverInactive } from './popups/CoverInactive';
import useViewportStyle from './reusable/hooks/useViewportStyle'
import { setScreenSize, toggleFilterPanel, setNewPathname, resetPopupTable, setPopupMessage, navigateToPath } from '../redux'
import { useHistory } from "react-router-dom";


// import Temp from './authentication/Login'


// const MapContent = lazy(() => import('./map/MapContent'));
const Attribution = lazy(() => import('./attributions/Attribution'));
const Feedback = lazy(() => import('./contact/Feedback'));
const ContactInfo = lazy(() => import('./contact/ContactInfo'));
const HomeInstruction = lazy(() => import('./instructions/HomeInstruction'));
const HomeDetail = lazy (() => import('./detail/HomeDetail'))
const Page400 = lazy (() => import('./errors/Page400'))
const Page404 = lazy (() => import('./errors/Page404'))
const Page503 = lazy (() => import('./errors/Page503'))
// const ContactHome = lazy (() => import('./contact/ContactHome'))
const DataTable = lazy (() => import('./tables/DataTable'))
const Login = lazy (() => import('./authentication/Login'))
const Signup = lazy (() => import('./authentication/Signup'))
const EmailSignup = lazy (() => import('./authentication/EmailSignup'))
const GoToEmail = lazy (() => import('./authentication/GoToEmail'))
const Activate = lazy (() => import('./authentication/Activate'))
const ResetPassword = lazy (() => import('./authentication/ResetPassword'))
const ResetPasswordConfirm = lazy (() => import('./authentication/ResetPasswordConfirm'))
const Google = lazy (() => import('./authentication/Google'))
const Facebook = lazy (() => import('./authentication/Facebook'))



const SubApp = () => {

    const dispatch = useDispatch()
    let history = useHistory();

    const { pathname } = useLocation();

    const firstRender = useRef(true) 

    const { popupTable, pathChange, authenticate } = useSelector(state => state)
    const { is_active } = popupTable
    const { current_path, previous_path, nav_path } = pathChange
    const { user } = authenticate

    const style = is_active ? 'no-overflow' : ''

    //  get the viewport size to apply either mobile or desktop settings
    const { viewportStyle } = useViewportStyle();
    const is_large_scrn = ['tv','desktop','laptop'].includes(viewportStyle)

    // set the screen size
    useEffect(() => {
        dispatch(setScreenSize(is_large_scrn))
    },[is_large_scrn])

    // if small screen then start with the filter closed
    useEffect(() => {
        !is_large_scrn && dispatch(toggleFilterPanel())
    },[])

    // create a welcome popup when a user logs in or signs up
    useEffect(() => {
        if ( firstRender.current ) return;
        if ( user ){
            dispatch(setPopupMessage({message: `Welcome, ${user.first_name}. You have logged in successfully!`, type: 'success', style: 'success-map'}));
        } else {
            dispatch(setPopupMessage({message: `You have logged out successfully!`, type: 'success', style: 'success-map'}));
        }
    },[user])


    // // Save the api address of the client on page load
    // useEffect(() => {
    //     axios
    //         .post('/save-ip/',{})
    //         .then()
    //         .catch();
    //         // .then(res => {console.log('success')})
    //         // .catch(err => {console.log('error')});
    // },[])

    // track the current and last url
    useEffect(() => {
        dispatch(setNewPathname(pathname))
    },[pathname])

    // navigate to new path when 'navigateToPath' is dispatched
    useEffect(() => {
        if ( firstRender.current ) return;
        history.push(nav_path)
    },[nav_path])

    // reset the table state when leaving the page so it's refreshed for its next use
    useEffect(() => {
        if ( previous_path === '/table/' ){
            dispatch(resetPopupTable())
        }
        firstRender.current = false
    },[current_path])

    // useEffect(() => { // this was just used for testing
    //     dispatch(navigateToPath('/detail/home'))
    // },[])


    // ConfirmBox: prompt to confirm an action
    // RequestDelete: popup form for user to fill out the site delete request
    // 
    return (
        <div className={style}>
            <PopupTable />
            <CoverInactive /> 
            <ConfirmBox />
            <RequestDelete />
            <TableSelectPopup />
            <Header />
            <Suspense fallback={<Loading pathname={pathname} />}>
                <Switch>
                    <Route exact path="/" component={MapContent} />
                    {/* <Route exact path="/temp" component={Temp} /> */}
                    <Route exact path="/attribution" component={Attribution} />
                    <Route exact path="/feedback" component={Feedback} />
                    <Route exact path="/contact" component={ContactInfo} />
                    <Route path="/instruction" component={HomeInstruction} />
                    <Route path="/detail" component={HomeDetail} />
                    {/* <Route path="/contact" component={ContactHome} /> */}
                    <Route path="/table" component={DataTable} />

                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/email-signup" component={EmailSignup} />
                    <Route path="/verify-email" component={GoToEmail} />
                    <Route path="/facebook" component={Facebook} />
                    <Route path="/google" component={Google} />
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
                    <Route path="/activate/:uid/:token" component={Activate} />

                    <Route path="/400" component={Page400} />
                    <Route path="/404" component={Page404} />
                    <Route path="/503" component={Page503} />
                </Switch>
            </Suspense>
        </div>
    )
}

const SubAppWithCheckRequests = checkRequests(SubApp)


const App = () => {

    // redirect to https when accessing the http path. only in production
    let url = window.location.href
    if ( url.startsWith('http://www.gplore.com') ){
        window.location.href = 'https://www.gplore.com' + window.location.pathname
    }

    // expose store when run in Cypress. the docs say to use window.store but this failed
    // https://www.cypress.io/blog/2018/11/14/testing-redux-store/#access-redux-store
    if (window.Cypress) {
        window.Cypress.store = store
    }

    return(
        <Provider store={store}>
            <Router>
                <SubAppWithCheckRequests />
            </Router>
        </Provider>
    )

    
}


ReactDOM.render(<App />,document.getElementById('app'));




