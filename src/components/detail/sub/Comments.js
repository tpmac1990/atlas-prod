import React, {useEffect} from 'react'

const Comments = ({value}) => {

    const { comment } = value

    // only display if the user has comments
    return (
            comment == ''
            ? null
            : (<>
                <h5>Your Comments</h5>
                <div className="detail-sub-info-c1">
                    {
                        comment == ''
                        ? 'You have no comments for this item yet'
                        : comment
                    }
                    {comment}
                </div>
            </>)
    )
}

export default Comments
