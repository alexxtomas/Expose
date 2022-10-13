import { nanoid } from 'nanoid'
import exposeSevices from '../services/exposeSevices'
import { $ } from './$'
import { logout } from './logout'
import { renderNewPage } from './renderNewPage'
import { showError } from './showError'
import validate from './validate'

export const eventHandlers = async () => {
  document.addEventListener('click', async (evt) => {
    const clickedOnByText = evt.target.innerText
    const clickedOnByClass = evt.target.className
    const clickedOnByClassList = evt.target.classList.value
    const clickedOnByElement = evt.path[0].localName
    if (clickedOnByText === 'Sign Up' && evt.path[0].localName === 'a') await renderNewPage('SignUp')
    else if (clickedOnByText === 'Login' && evt.path[0].localName === 'a') await renderNewPage('Login')
    else if (clickedOnByClass === 'home') await renderNewPage('Home')
    else if (clickedOnByText === 'Logout') logout()
    else if (clickedOnByText === 'Posts') await renderNewPage('Posts')
    else if (clickedOnByClass === 'theme' || clickedOnByClassList === 'fa-solid fa-moon' || clickedOnByClassList === 'fa-solid fa-sun') {
      const html = $('html')
      if (html.getAttribute('data-theme') === 'light') html.setAttribute('data-theme', 'dark')
      else html.setAttribute('data-theme', 'light')
    } else if (clickedOnByClassList === 'container post' || clickedOnByElement === 'h1' || clickedOnByElement === 'small') {
      const { id } = evt.target
      await renderNewPage('PostDetails', id)
    } else if (clickedOnByText === 'Create') await renderNewPage('Create')
    else if (clickedOnByText === 'Add comment') {
      const button = document.querySelector('.add-comment')
      button.insertAdjacentHTML('beforebegin', '<form><input type="text" id="comment" placeholder="I love your post"><button>Add coment</button></form>')
      button.remove()
    }
  })

  document.addEventListener('input', evt => {
  })

  document.addEventListener('submit', async evt => {
    evt.preventDefault()
    console.log(evt)
    const nameInput = $('#name')
    const lastNameInput = $('#last-name')
    const addressInput = $('#address')
    const emailInput = $('#email')
    const passwordInput = $('#password')
    const titleInput = $('#title')
    const contentInput = $('#content')
    const commentInput = $('#comment')

    if (addressInput !== null) {
      // Sign Up Form
      await validate.signUp(emailInput, nameInput, lastNameInput, passwordInput)

      const newUser = {
        id: nanoid(),
        name: nameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        avatar: '',
        posts: []
      }

      const response = await exposeSevices.createUser(newUser)
      if (response.status === 201) {
        window.localStorage.setItem('user', JSON.stringify({ email: response.data.email, password: response.data.password }))

        window.location.reload()
      } else throw new Error('Error in create user')
    } else if (titleInput !== null) {
      const post = {
        id: nanoid(),
        title: titleInput.value,
        content: contentInput.value,
        comments: []
      }
      await exposeSevices.createPost(post)

      const main = $('main')
      main.insertAdjacentHTML('afterbegin', '<div class="succesfully">Your Post was created</div>')
      setInterval(() => {
        const div = $('.succesfully')
        div.remove()
      }, 60000)
    } else if (commentInput !== null) {
      // const username = JSON.parse(window.localStorage.getItem('user'))
      const comment = { content: commentInput.value }

      await exposeSevices.createComment(comment)
    } else {
      // Login Form
      const error = $('.error-text')
      if (error !== null) error.remove()
      const credentials = await exposeSevices.getAllUsers('credentials')
      const validateCredentials = await credentials.find(({ email, password }) => (email === emailInput.value) && (password === passwordInput.value)) !== undefined
      if (validateCredentials) {
        window.localStorage.setItem('user', JSON.stringify({ email: emailInput.value, password: passwordInput.value }))
        window.location.reload()
      } else {
        const error = $('.error-text')
        if (error !== null) error.remove()
        showError(passwordInput, 'Email or password is not valid.')
      }
    }

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
      input.value = ''
    })
  })
}
