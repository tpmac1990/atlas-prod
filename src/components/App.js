import 'regenerator-runtime/runtime' // required for using react-table wwith global filter from the map component.
import React, { Suspense, lazy, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './layout/header';
import Loading from './loading/Loading';
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import checkRequests from "./HOC/CheckRequests";
import MapContent from './map/MapContent';
import { PopupTable } from './popups/PopupTable';
import { CoverInactive } from './popups/CoverInactive';
import axios from 'axios';

// const MapContent = lazy(() => import('./map/MapContent'));
const Attribution = lazy(() => import('./attributions/Attribution'));
const HomeDetail = lazy (() => import('./detail/HomeDetail'))
const Page400 = lazy (() => import('./errors/Page400'))
const Page404 = lazy (() => import('./errors/Page404'))
const Page503 = lazy (() => import('./errors/Page503'))
const ContactHome = lazy (() => import('./contact/ContactHome'))



const SubApp = () => {

    const { is_active } = useSelector(state => state.popupTable)
    const style = is_active ? 'no-overflow' : ''

    // Save the api address of the client on page load
    useEffect(() => {
        axios
            .post(`/save-ip/`,{})
            .then(res => {console.log('success')})
            .catch(err => {console.log('error')});
    },[])

    return (
        <div className={style}>
            <PopupTable />
            <CoverInactive /> 
            <Header />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={MapContent} />
                    <Route exact path="/attribution" component={Attribution} />
                    <Route path="/detail" component={HomeDetail} />
                    <Route path="/contact" component={ContactHome} />
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
