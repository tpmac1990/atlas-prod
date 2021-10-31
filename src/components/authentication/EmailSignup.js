import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from "react-router-dom";

import { signup } from '../../redux'
import UserInput from './UserInput'


const EmailSignup = () => {

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(state => state.authenticate)

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            dispatch(signup(formData));
            setAccountCreated(true);
        }
    };

    // redirect to home if the user is already authenticated
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    // redirect to GoToEmail if account has been created
    if (accountCreated) {
        return <Redirect to='/verify-email' />
    }

    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c2">
                <h1>Sign up by Email</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <UserInput style='input-c5' icon='person' type='text' name='first_name' placeholder='First Name' value={first_name} handler={onChange}/>
                    <UserInput style='input-c5' icon='person' type='text' name='last_name' placeholder='Last Name' value={last_name} handler={onChange}/>
                    <UserInput style='input-c5' icon='email' type='email' name='email' placeholder='E-mail' value={email} handler={onChange}/>
                    <UserInput style='input-c5' icon='lock' type='password' name='password' placeholder='Password' value={password} handler={onChange}/>
                    <UserInput style='input-c5' icon='lock' type='password' name='re_password' placeholder='Re-type password' value={re_password} handler={onChange}/>
                    <button className='btn-auth-c1 btn-email btn-c5' type='submit' >Sign up</button>
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default EmailSignup;


// const [ firstName, setFirstName ] = useState('')
// const [ lastName, setLastName ] = useState('')
// const [ email, setEmail ] = useState('')
// const [ userName, setUserName ] = useState('')
// const [ passwordOne, setPasswordOne ] = useState('')
// const [ passwordTwo, setPasswordTwo ] = useState('')


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