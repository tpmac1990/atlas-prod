import React, { useState } from 'react'


const GeneralIssues = () => {

    const [msg, setMsg] = useState('')

    return (
        <>
            <h5>More Information</h5>
            <div className='edit-table-c1'>
                <textarea 
                    placeholder='Add further information or issues for this specific piece of data ...' 
                    type='textarea' 
                    className='input-c6' 
                    value={msg} 
                    onChange={e => setMsg(e.target.value)} 
                />
            </div>
        </>
    )
}

export default GeneralIssues

