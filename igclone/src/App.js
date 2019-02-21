import PostsPage from './components/PostsPage'
import LoginPage from './components/LoginPage/LoginPage'
import authenticate from './components/authentication/authenticate'

export default authenticate(LoginPage)(PostsPage)