import Nav from '../components/Nav'
import { $ } from '../utils/$'

const app = $('#app')
const header = document.createElement('header')
const Header = async (title = 'Expose') => {
  header.innerHTML = await Nav(title)
  app.appendChild(header)
}

export default Header
