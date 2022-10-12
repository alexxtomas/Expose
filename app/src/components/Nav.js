import { checkUserLogin } from '../utils/checkUserLogin'

const Nav = async (page = 'Home', title = 'Expose') => {
  const isLogged = await checkUserLogin()
  console.log(isLogged)
  if ((page === 'Home' && !isLogged) || page === 'SignUp') {
    return `
    <nav>
      <ul>
        <li><strong>${title}</strong></li>
      </ul>
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#"  role="button">Sign Up</a></li>
      </ul>
    </nav>
    `
  } else if (page === 'Home' && isLogged) {
    return `
    <nav>
      <ul>
        <li><strong>${title}</strong></li>
      </ul>
      <ul>
        <li><a href="#" class="home"><i class="fa-solid fa-house"></i></a></li>
        <li><a href="#">Posts</a></li>
      </ul>
  </nav>
    `
  } else if (page === 'Login') {
    return `
        <nav>
          <ul>
            <li><strong>${title}</strong></li>
          </ul>
          <ul>
            <li><a href="#" class="home"><i class="fa-solid fa-house"></i></a></li>
          </ul>
      </nav>
  `
  }
}
export default Nav
