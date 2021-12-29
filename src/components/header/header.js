import React, {useState, useEffect, useRef} from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo/logo_2.png'
import MessageBar from '../message/MessageBar'
import { useSelector, useDispatch } from 'react-redux'
import { logout, checkAuthenticated, load_user } from '../../redux'

function header() {

    const dispatch = useDispatch()

    const authRef = useRef(null)
    const navRef = useRef(null)

    const { sizeControl, authenticate } = useSelector(state => state)
    const { is_large } = sizeControl
    const { isAuthenticated, user } = authenticate

    const navLinksStyle = is_large ? 'ul-desktop' : 'ul-mobile'

    const [ showNavList, setShowNavList ] = useState(is_large ? true : false)
    const [ showUserList, setShowUserList ] = useState(false)

    // checks local storage so see if the user is still authenticated and then loads the user profile
    useEffect(() => {
        dispatch(checkAuthenticated());
        dispatch(load_user());
    }, []);

    // change nav menu display depending on viewpoint size
    useEffect(() => {
        setShowNavList(is_large ? true : false)
    },[is_large])

    // If in mobile view and an option is clicked, then collapse the burger
    const MenuDropdownHandler = () => {
        !is_large && setShowNavList(false)
    }

    // open and close the user options dropdown when clicking on the user icon and closes dropdown after selecting an option
    const userClickHandler = () => {
        setShowUserList(prev_state => !prev_state)
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    // hides the auth or nav links when clicking outside the dropdowns
    const handleClickOutside = e => {
        authRef.current && !authRef.current.contains(e.target) && setShowUserList(false)
        !is_large && navRef.current && !navRef.current.contains(e.target) && setShowNavList(false)
    };
    // Attaches click listener to document to find when user clicks outside the dropdowns 
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });


    return (
        <nav id="navbar">
            { 
                !is_large
                ? (
                    <div className='burger' onClick={() => setShowNavList(prev => !prev)}>
                        <span className="material-icons">menu</span>
                    </div>
                )
                : null
            }
            {
                showNavList
                ? (
                    <ul className={navLinksStyle} ref={navRef} onClick={MenuDropdownHandler}>
                        <li><Link to="/attribution">Attribution</Link></li>
                        <li><Link to="/instruction/home">Instructions</Link></li>
                        <li><Link to="/">Map</Link></li>
                        <li><Link to="/detail/home">Detail</Link></li>
                        <li><Link to="/contact/home">Contact</Link></li>
                    </ul>
                )
                : null
            }
            <img src={logo} />
            <span className={`material-icons ${isAuthenticated ? 'user-in' : 'user-ctrl'}`} onClick={userClickHandler}>account_circle</span>
            {
                showUserList
                ? (
                    <ul className='user-header-dropdown' ref={authRef} onClick={userClickHandler}>
                        <li>{ isAuthenticated ? <Link to="/" onClick={logoutHandler}>Log out</Link> : <Link to="/login">Log in</Link> }</li>
                        <li><Link to="/contact/home">Contact</Link></li>
                    </ul>
                )
                : null
            }
            <MessageBar />
        </nav>
    )
}

export default header

