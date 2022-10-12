import { $ } from './$'
import { renderNewPage } from './renderNewPage'
import validate from './validate'

export const eventHandlers = async () => {
  document.addEventListener('click', async (evt) => {
    const clickedOnByText = evt.target.innerText
    const clickedOnByClass = evt.target.className
    if (clickedOnByText === 'Sign Up' && evt.path[0].localName === 'a') await renderNewPage('SignUp')
    else if (clickedOnByText === 'Login') await renderNewPage('Login')
    else if (clickedOnByClass === 'home' || clickedOnByClass === 'fa-solid fa-house') await renderNewPage('Home')
  })

  document.addEventListener('input', evt => {
  })

  document.addEventListener('submit', async evt => {
    evt.preventDefault()
    const emailInput = $('#email')
    const nameInput = $('#name')
    const lastNameInput = $('#last-name')
    const passwordInput = $('#password')

    await validate.signUp(emailInput, nameInput, lastNameInput, passwordInput)

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
      input.value = ''
    })
  })
}
