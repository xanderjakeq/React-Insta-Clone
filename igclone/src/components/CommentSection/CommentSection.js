import React from 'react'
import PropTypes from 'prop-types'

const CommentSection = (props) => {
    return(
        <>
        {props.comments.map((comment, index) => {
            return( 
                <div key = {`${comment.username}${index}`}>
                    <h3>{comment.username}</h3>
                    <p>{comment.text}</p>
                </div>
            )
        })}
        </>
    )
}

CommentSection.propTypes ={
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default  CommentSection