import React from 'react'

// I changed this to a switch statement so I could alter the back ground colour depending on the requested path, but the white flash remains.
const Loading = ({pathname}) => {

    switch(pathname){
        case '/login':
        case '/signup':
        case '/email-signup':
        case '/verify-email':
        case '/facebook':
        case '/google':
        case '/reset-password':
        case '/password/reset/confirm':
        case '/activate':
            // return <p style={{color: 'grey', backgroundColor: 'black'}}>Loading...</p>
            return <p style={{color: 'grey'}}>Loading...</p>
        default:
            return <p style={{color: 'grey'}}>Loading...</p>
    }
}

export default Loading;
