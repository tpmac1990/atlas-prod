import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { reset_password } from '../../redux';


const ResetPassword = () => {

    const dispatch = useDispatch()

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(reset_password(email));
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/verify-email' />
    }

    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c2">
                <h1>Request Password Reset</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <button className='btn-auth-c1 btn-email btn-c5' type='submit'>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword

