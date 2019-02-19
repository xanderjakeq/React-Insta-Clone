import React, {Fragment} from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import * as Icons from 'react-feather'

const Post = (props) => {
    const post = props.postData;
    return (
        <Fragment>
            <div>
                <div className = "postHeader">
                    <img src={post.thumbnailUrl} alt="profile"/>
                    <h2>{post.username}</h2>
                </div>
                <div>
                    <img src={post.imageUrl} alt="Post"/>
                </div>
                <div className= 'postDetails'>
                   <div><Icons.Heart/><Icons.MessageCircle/></div> 
                   <div>{`${post.likes} likes`}</div>
                   <CommentSection comments = {post.comments}/>
                   <input/>
                </div>
            </div>                
        </Fragment>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text:PropTypes.string
        }))
    })
}

export default Post