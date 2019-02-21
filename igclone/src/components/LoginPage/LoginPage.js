import React, {Component} from 'react'

export default class LoginPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        window.localStorage.setItem('username', this.state.username)
        window.location.reload()
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input name = "username" value = {this.state.username} onChange = {this.handleInputChange}/>
                    <input name = "password" type = 'password' value = {this.state.password} onChange = {this.handleInputChange}/>
                    <input type = "submit" value = "Login"/>
                </form>
            </div>
        )
    }
}