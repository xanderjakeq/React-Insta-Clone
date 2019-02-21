import React, {Component, Fragment} from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import * as Icons from 'react-feather'
import styled from 'styled-components'

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 5px;
`;
class Post extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            // username: window.localStorage.getItem('username'),
            newComment: '',
        }
    }

    /**
     * hande input change for comments
     */
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    /**
     * Creates a comment object and pass it into the
     * addComment() prop
     */
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.newComment.length === 0) return
        // let newCommentObj = {
        //     username: this.state.username,
        //     text: this.state.newComment
        // }
        this.props.addComment(this.state.newComment, this.props.index)
        this.setState({newComment: ''})
    }
render(){
        return (
            <Fragment>
                <div>
                    <PostHeader>                        
                        {/* <img src={this.props.postData.thumbnailUrl} alt="profile"/> */}
                        <ProfileImg src={this.props.postData.thumbnailUrl} alt = "profile"/>
                        <h2>{this.props.postData.username}</h2>
                    </PostHeader>
                    <div>
                        <img src={this.props.postData.imageUrl} alt="Post"/>
                    </div>
                    <div className= 'postDetails'>
                        <div><Icons.Heart onClick={() => this.props.incLikes(this.props.index)}/><Icons.MessageCircle/></div> 
                        <div>{`${this.props.postData.likes} likes`}</div>
                        <CommentSection comments = {this.props.postData.comments}/>
                        <form onSubmit = {this.handleSubmit}>   
                            <input name = 'newComment' type = "text" value = {this.state.newComment} onChange = {this.onChange}/>
                            <input type = "submit" value ="submit"/>
                        </form>
                    </div>
                </div>                
            </Fragment>
        )
    }
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