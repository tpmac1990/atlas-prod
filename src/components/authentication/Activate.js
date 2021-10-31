import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from "react-router-dom";

import { verify } from '../../redux'

const Activate = ({ match }) => {

    const dispatch = useDispatch()

    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        dispatch(verify(uid, token));
        setVerified(true);
    };

    if (verified) {
        return <Redirect to='/login' />
    }

    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c3">
                <h1>Click to verify your account:</h1>
                <button className='btn-c5 btn-auth-c1 btn-email' type='button' onClick={verify_account} >Verify</button>
            </div>
        </div>
    )
}

export default Activate;
