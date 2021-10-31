import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import { setPopupMessage, saveUserEmail, login } from '../../redux'
import UserInput from './UserInput'
import FacebookIcon from '../../assets/icons/facebook-c1.svg';
import GoogleIcon from '../../assets/icons/google-c1.svg';


const Login = () => {

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(state => state.authenticate)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    // when successful you get back an authorisation url which is then inserted as the new url. then when you have the url
    // the code and state needs to be extracted and then send a post request
    // log in with google credentials, the user will be signed up automatically if they are not already
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`/auth/o/google-oauth2/?redirect_uri=${window.location.origin}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    // log in with google credentials, the user will be signed up automatically if they are not already
    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`/auth/o/facebook/?redirect_uri=${window.location.origin}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    // redirect to home if the user is already logged in
    if (isAuthenticated) {
        return <Redirect to='/' />
    }


    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c2">
                <h1>Login</h1>
                <button className='btn-auth-c1 btn-social-c1 btn-c5 btn-fb' onClick={continueWithFacebook}>
                    <img src={FacebookIcon} alt='facebook logo' />
                    Log in with Facebook
                </button>
                <button className='btn-auth-c1 btn-social-c1 btn-c5 btn-goog' onClick={continueWithGoogle}>
                    <img src={GoogleIcon} alt='facebook logo' />
                    Log in with Google
                </button>
                <div className='or-line-through'>OR</div>
                <form onSubmit={e => onSubmit(e)}>
                    <UserInput style='input-c5' icon='person' type='text' name='email' placeholder='Email' value={email} handler={onChange}/>
                    <UserInput style='input-c5' icon='lock' type='password' name='password' placeholder='Password' value={password} handler={onChange}/>
                    <button className='btn-c5 btn-auth-c1 btn-email' type='submit'>Log In</button>
                </form>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                <p>Forgotten your password? <Link to='/reset-password'>Retrieve password</Link></p>
            </div>
        </div>
    )
}

export default Login;


// const [ userName, setUserName ] = useState('')
// const [ password, setPassword ] = useState('')


// const SubmitHandler = e => {
//     e.preventDefault()
//     if (firstName === '') {
//         dispatch(setPopupMessage({message: "'First Name' is a required field", type: 'error', style: 'error-fixed-user'}))
//     } else if ( !email.includes('@') ) {
//         dispatch(setPopupMessage({message: "Please enter a valid email", type: 'error', style: 'error-fixed-user'}))
//     } else {
//         dispatch(saveUserEmail({first_name: firstName, last_name: lastName, email: email}))
//     }
// }