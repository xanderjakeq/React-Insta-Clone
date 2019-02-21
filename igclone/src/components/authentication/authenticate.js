import React, {Component} from 'react'

export default (LoginPage) => (PostsPage) => class extends Component  {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount(){
        if(window.localStorage.getItem('username')){
            this.setState({
                isLoggedIn: true
            })
        }else{
            this.setState({
                isLoggedIn: false
            })
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return <PostsPage/>
        }
        return <LoginPage/>
    }
}