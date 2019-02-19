import React, {Component, Fragment} from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import * as Icons from 'react-feather'

class Post extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            username: 'jdoe',
            newComment: '',
        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let newCommentObj = {
            username: this.state.username,
            text: this.state.newComment
        }
        this.props.addComment(newCommentObj, this.props.index)
        this.setState({newComment: ''})
    }

    

    render(){

        return (
            <Fragment>
                <div>
                    <div className = "postHeader">
                        <img src={this.props.postData.thumbnailUrl} alt="profile"/>
                        <h2>{this.props.postData.username}</h2>
                    </div>
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