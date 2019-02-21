import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Post from './Post'

const MainContainer = styled.main`
    margin: 0 auto;
    width: 100%; 
    max-width: 500px;
`;
const PostsContainer = (props) => {
    return(
            <MainContainer>
                {props.data.map((post,index) => <Post key = {`${post.username}${index}`} 
                                                      index = {index} 
                                                      postData = {post}
                                                      addComment = {props.addComment}
                                                      incLikes = {props.incLikes}/>)}
            </MainContainer>
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