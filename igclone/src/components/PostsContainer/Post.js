import React, {Fragment} from 'react'
import CommentSection from '../CommentSection/CommentSection'

const Post = (props) => {
    const post = props.postData;
    return (
        <Fragment>
            <div>
                <div>
                    <img src={post.thumbnailUrl} alt="profile"/>
                    <h2>{post.username}</h2>
                </div>
                <div>
                    <img src={post.imageUrl} alt="Post"/>
                </div>
                <div className= 'postDetails'>
                   <div>Icons</div> 
                   <div>likes</div>
                   <CommentSection comments = {post.comments}/>
                   <input/>
                </div>
            </div>                
        </Fragment>
    )
}

export default Post