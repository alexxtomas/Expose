import { $ } from '../utils/$'
import { checkUserLogin } from '../utils/checkUserLogin'

const Nav = async (title = 'Expose') => {
  const html = $('html')

  const icon = html.getAttribute('data-theme') === 'light' ? '<li><a class="theme" href="#"><i class="fa-solid fa-moon"></i></a></li>' : '<li><a href="#" class="theme"><i class="fa-solid fa-sun"></i></a></li>'
  const isLogged = await checkUserLogin()
  if (!isLogged) {
    return `
    <nav>
      <ul>
        <li><strong>${title}</strong></li>
      </ul>
      <ul>
      <li><a href="#" class="home">Home</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#"  role="button">Sign Up</a></li>
        ${icon}
      </ul>
    </nav>
    `
  } else if (isLogged) {
    return `
    <nav>
      <ul>
        <li><strong>${title}</strong></li>
      </ul>
      <ul>
        <li><a href="#" class="home">Home</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">Create</a></li>
        <li><a href="#" role="button">Logout</a></li>
        ${icon}
      </ul>
  </nav>
    `
  }
}
export default Nav
