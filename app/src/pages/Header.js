import Nav from '../components/Nav'
import { $ } from '../utils/$'

const app = $('#app')
const header = document.createElement('header')
// const header = document.createElement('header')
const Header = async (page = 'Home', title = 'Expose') => {
  header.innerHTML = await Nav(page, title)
  app.appendChild(header)
}

export default Header
