import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
// import useViewportStyle from '../reusable/hooks/useViewportStyle'
import logo from '../../assets/images/logo/logo_2.png'
import MessageBar from '../message/MessageBar'
import { useSelector } from 'react-redux'

function header() {

    // 'tv','desktop','laptop','tablet','mobile'
    // const { viewportStyle } = useViewportStyle();
    // const is_large = ['tv','desktop','laptop'].includes(viewportStyle)
    const { is_large } = useSelector(state => state.sizeControl)
    const navLinksStyle = is_large ? 'ul-desktop' : 'ul-mobile'

    const [ showNavList, setShowNavList ] = useState(is_large ? true : false)

    // change nav menu display depending on viewpoint size
    useEffect(() => {
        setShowNavList(is_large ? true : false)
    },[is_large])

    // If in mobile view and an option is clicked, then collapse the burger
    const MenuDropdownHandler = () => {
        !is_large && setShowNavList(false)
    }

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
                    <ul className={navLinksStyle} onClick={MenuDropdownHandler}>
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
            <MessageBar />
        </nav>
    )
}

export default header
