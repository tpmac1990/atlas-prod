import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import StarRating from '../reusable/rating/StarRating'
import { setPopupMessage, saveUserFeedback } from '../../redux'
import { useDispatch, useSelector } from 'react-redux'

import ToolTip from '../reusable/tooltip/ToolTip'

const Feedback = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ feedback, setFeedback ] = useState('')
    const [ clickRate, setClickRate ] = useState(null)

    const { user } = useSelector(state => state.authenticate)

    const submitHandler = e => {
        e.preventDefault()
        if ( email === '' || name === '' || !clickRate || feedback === '' ) {
            dispatch(setPopupMessage({message: "All fields are required", type: 'error', style: 'error-fixed-user'}))
            return;
        }
        if ( !email.includes('@') ){
            dispatch(setPopupMessage({message: "Incorrect email", type: 'error', style: 'error-fixed-user'}))
            return;
        }
        // if the user is not logged in, but the email matches a registered user then their user id will be applied in the backend
        dispatch(saveUserFeedback({name: name,email: email,feedback: feedback,rating: clickRate,user: user ? user.id : null}))
        history.push('/')
    }

    return (
        <div className="contact-form-area">
            <div>
                <h2>Feedback</h2>
                <h5>The good, the bad, we want it!</h5>
                <hr />
                <form onSubmit={submitHandler}>
                    <input type='text' placeholder='Name' className='input-c4' value={name} onChange={e => setName(e.target.value)} />
                    <input type='email' placeholder='Email' className='input-c4' value={email} onChange={e => setEmail(e.target.value)} /><br/>
                    <ToolTip styles='contact-tooltip' content='rating out of 5'>
                        <StarRating clickRate={clickRate} setClickRate={setClickRate} />
                    </ToolTip>
                    <textarea type='textarea' placeholder='Feedback' className='input-c4' value={feedback} onChange={e => setFeedback(e.target.value)} /><br />
                    <button className='btn-c5' type='submit'>Submit</button>               
                </form>
            </div>
        </div>
    )
}

export default Feedback