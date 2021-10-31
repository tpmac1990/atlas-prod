import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { reset_password_confirm } from '../../redux';


const ResetPasswordConfirm = ({ match }) => {

    const dispatch = useDispatch()

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
        setRequestSent(true);
    };

    // redirect to login to allow the user to login with the new password
    if (requestSent) {
        return <Redirect to='/login' />
    }

    return (
        <div className="auth-page">
            <div className="auth-sub-area asa-c2">
                <h1>Request Password Reset</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='New Password'
                            name='new_password'
                            value={new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Confirm New Password'
                            name='re_new_password'
                            value={re_new_password}
                            onChange={e => onChange(e)}
                            minLength='6'
                        />
                    </div>
                    <button className='btn-auth-c1 btn-email btn-c5' type='submit'>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordConfirm

