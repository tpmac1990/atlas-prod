import React from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from 'axios';

import FacebookIcon from '../../assets/icons/facebook-c1.svg';
import GoogleIcon from '../../assets/icons/google-c1.svg';

const Signup = () => {

    const history = useHistory();

    const { isAuthenticated } = useSelector(state => state.authenticate)

    // sign up and login using google credentials
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`/auth/o/google-oauth2/?redirect_uri=${window.location.origin}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    // sign up and login using facebook credentials
    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`/auth/o/facebook/?redirect_uri=${window.location.origin}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    // if the user is already logged in then redirect to the home page
    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c1">
                <h1>Sign up</h1>
                <button className='btn-auth-c1 btn-social-c1 btn-c5 btn-fb' onClick={continueWithFacebook}>
                    <img src={FacebookIcon} alt='facebook logo' />
                    Sign up with Facebook
                </button>
                <button className='btn-auth-c1 btn-social-c1 btn-c5 btn-goog' onClick={continueWithGoogle}>
                    <img src={GoogleIcon} alt='facebook logo' />
                    Sign up with Google
                </button>
                <div className='or-line-through'>OR</div>
                <button className='btn-auth-c1 btn-c5 btn-email' onClick={() => history.push('/email-signup')} >Sign up with Email</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup
