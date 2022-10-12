import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { $ } from '../utils/$'

const app = $('#app')
const main = document.createElement('main')
const Main = (page = 'Home') => {
  if (page === 'Home') main.innerHTML = Home()
  else if (page === 'Login') main.innerHTML = Login()
  else if (page === 'SignUp') main.innerHTML = SignUp()

  app.appendChild(main)
}

export default Main
