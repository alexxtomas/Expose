import { renderNewPage } from './renderNewPage'

export const eventHandlers = () => {
  document.addEventListener('click', async (evt) => {
    const clickedOnByText = evt.target.innerText
    const clickedOnByClass = evt.target.className
    if (clickedOnByText === 'Sign Up') await renderNewPage('SignUp')
    else if (clickedOnByText === 'Login') await renderNewPage('Login')
    else if (clickedOnByClass === 'home' || clickedOnByClass === 'fa-solid fa-house') await renderNewPage('Home')
  })
}
