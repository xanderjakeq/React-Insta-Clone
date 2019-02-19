import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
const PostsContainer = (props) => {
    return(
            <main>
                {props.data.map((post,index) => <Post key = {`${post.username}${index}`} 
                                                      index = {index} 
                                                      postData = {post}
                                                      addComment = {props.addComment}/>)}
            </main>
    )
}

PostsContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text:PropTypes.string
        }))
    }))
}

export default PostsContainer;