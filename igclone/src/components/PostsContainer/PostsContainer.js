import React, {Component} from 'react'
import Post from './Post'
const PostsContainer = (props) => {
    return(
            <main>
                {props.data.map(post => <Post key = {post.username} postData = {post}/>)}
            </main>
    )
}

export default PostsContainer;