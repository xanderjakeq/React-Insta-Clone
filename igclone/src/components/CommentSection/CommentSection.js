import React from 'react'

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

export default  CommentSection