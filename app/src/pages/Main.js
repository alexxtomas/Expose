import Create from '../components/Create'
import Home from '../components/Home'
import Login from '../components/Login'
import PostDetails from '../components/PostDetails'
import Posts from '../components/Posts'
import SignUp from '../components/SignUp'
import { $ } from '../utils/$'

const app = $('#app')
const main = document.createElement('main')
const Main = async (page = 'Home', id) => {
  if (page === 'Home') main.innerHTML = Home()
  else if (page === 'Login') main.innerHTML = Login()
  else if (page === 'SignUp') main.innerHTML = SignUp()
  else if (page === 'Posts') main.innerHTML = await Posts()
  else if (page === 'Create') main.innerHTML = Create()
  else if (page === 'PostDetails') main.innerHTML = await PostDetails(id)

  app.appendChild(main)
}

export default Main
