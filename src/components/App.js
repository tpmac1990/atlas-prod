import 'regenerator-runtime/runtime' // required for using react-table wwith global filter from the map component.
import React, { Suspense, lazy, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import axios from 'axios';

import Header from './header/header';
import Loading from './loading/Loading';
import checkRequests from "./HOC/CheckRequests";
import MapContent from './map/MapContent';
import { PopupTable } from './popups/PopupTable';
import { CoverInactive } from './popups/CoverInactive';
import ConfirmBox from './reusable/confirm/ConfirmBox'
import useViewportStyle from './reusable/hooks/useViewportStyle'
import { setScreenSize, toggleFilterPanel, setNewPathname, resetPopupTable } from '../redux'


// const MapContent = lazy(() => import('./map/MapContent'));
const Attribution = lazy(() => import('./attributions/Attribution'));
const HomeInstruction = lazy(() => import('./instructions/HomeInstruction'));
const HomeDetail = lazy (() => import('./detail/HomeDetail'))
const Page400 = lazy (() => import('./errors/Page400'))
const Page404 = lazy (() => import('./errors/Page404'))
const Page503 = lazy (() => import('./errors/Page503'))
const ContactHome = lazy (() => import('./contact/ContactHome'))
const DataTable = lazy (() => import('./tables/DataTable'))



const SubApp = () => {

    const dispatch = useDispatch()

    const { pathname } = useLocation();

    const { is_active } = useSelector(state => state.popupTable)
    const { current_path, previous_path } = useSelector(state => state.pathChange)
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


    // Save the api address of the client on page load
    useEffect(() => {
        axios
            .post('/save-ip/',{})
            .then()
            .catch();
            // .then(res => {console.log('success')})
            // .catch(err => {console.log('error')});
    },[])

    // track the current and last url
    useEffect(() => {
        dispatch(setNewPathname(pathname))
    },[pathname])

    // reset the table state when leaving the page so it's refreshed for its next use
    useEffect(() => {
        if ( previous_path === '/table/' ){
            dispatch(resetPopupTable())
        }
    },[current_path])

    return (
        <div className={style}>
            <PopupTable />
            <CoverInactive /> 
            <ConfirmBox />
            <Header />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={MapContent} />
                    <Route exact path="/attribution" component={Attribution} />
                    <Route path="/instruction" component={HomeInstruction} />
                    <Route path="/detail" component={HomeDetail} />
                    <Route path="/contact" component={ContactHome} />
                    <Route path="/table" component={DataTable} />
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
    return(
        <Provider store={store}>
            <Router>
                <SubAppWithCheckRequests />
            </Router>
        </Provider>
    )
}


ReactDOM.render(<App />,document.getElementById('app'));
