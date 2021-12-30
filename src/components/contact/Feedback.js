import React, { useState } from 'react'
import StarRating from '../reusable/rating/StarRating'
import { setPopupMessage, saveUserFeedback } from '../../redux'
import { useDispatch } from 'react-redux'

import ToolTip from '../reusable/tooltip/ToolTip'

const Feedback = () => {

    const dispatch = useDispatch()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ feedback, setFeedback ] = useState('')
    const [ clickRate, setClickRate ] = useState(null)

    const submitHandler = e => {
        e.preventDefault()
        if ( !email.includes('@') && email !== '' ) {
            dispatch(setPopupMessage({message: "Please enter a valid email", type: 'error', style: 'error-fixed-user'}))
        } else if ( !clickRate ) {
            dispatch(setPopupMessage({message: "Please leave a rating", type: 'error', style: 'error-fixed-user'}))
        } else {
            dispatch(saveUserFeedback({name: name,email: email,feedback: feedback,rating: clickRate}))
        }
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