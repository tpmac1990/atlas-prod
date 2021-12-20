import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglePopup, retieveExistingRequest, submitDeleteRequest, toggleFullScreenInactive, setPopupMessage, setComment } from '../../redux'

// ???? to work on: make button inactive when value is an empty string, same as previous
//      delete if update and comment is empty string

// a user can request to delete a site from the popup component. this is only available for site data as there are a large number of irrelevant points
// This component is hosted in the App.js component
const RequestDelete = () => {

    const dispatch = useDispatch()

    const { is_open, ind, comment, update } = useSelector(state => state.deleteRequest)

    // submit the comment to db
    const SubmitHandler = e => {
        e.preventDefault()
        // submit form data
        dispatch(submitDeleteRequest({user_name: 'user', ind: ind, comment: comment}))
        // close the form
        dispatch(togglePopup({is_open: false, ind: null}))
        // ??? this needs to be moved in the case of success or fail submit
        dispatch(setPopupMessage({message: 'Thankyou for your delete request', type: 'success', style: 'success-map'}))
    }


    // get the existing
    useEffect(() => {
        if (firstRender.current | !ind) return;
        dispatch(retieveExistingRequest({user_name: 'user', ind: ind}))
    },[ind])

    // toggle the inactive screen when this popup is active
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
          }
        is_open
        ? dispatch(toggleFullScreenInactive(true))
        : dispatch(toggleFullScreenInactive(false))
    },[is_open])

    // updates the comment on change
    const CommentHandler = e => {
        dispatch(setComment(e.target.value))
    }


    return (
        !is_open
        ? null
        : (
            <div id='site-delete-request'>
                <div className='site-delete-request-header'>
                    <h4>Request to delete site: {ind}</h4>
                    <div className='close-c5' onClick={() => dispatch(togglePopup({is_open: false, ind: null}))}><span>x</span></div>
                </div>
                <form onSubmit={SubmitHandler}>
                    <textarea
                        className='input-c4'
                        placeholder='Why should this site be deleted'
                        type='textarea'
                        name='comment'
                        value={comment}
                        onChange={CommentHandler} 
                    />
                    <button type='submit' className='btn-c5' >Submit</button>
                </form>
            </div>
        )
    )
}

export default RequestDelete

