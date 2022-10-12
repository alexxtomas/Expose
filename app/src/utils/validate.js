import exposeSevices from '../services/exposeSevices'
import { showError } from './showError'
const email = async (emailToCheck) => {
  const existentEmails = await exposeSevices.getAllUsers('emails')
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const isItRegistered = await existentEmails.find(({ email }) => email === emailToCheck) !== undefined
  if (regex.test(emailToCheck) && !isItRegistered) return true
  else return false
}

const name = (name) => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 8]

  for (const n of numberArray) {
    if (name.includes(n)) return false
  }

  return true
}

const password = (password) => {
  const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

  if (regex.test(password)) return true
  else return false
}

const signUp = async (emailInput, nameInput, lastNameInput, passwordInput) => {
  const error = document.querySelector('.error-text')
  if (error !== null) error.remove()
  if (!await email(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email. This email is invalid or alredy exists')
  } else if (!name(nameInput.value)) {
    const error = document.querySelector('.error-text')
    if (error !== null) error.remove()
    showError(nameInput, 'Please enter a valid name.')
  } else if (!name(lastNameInput.value)) {
    const error = document.querySelector('.error-text')
    if (error !== null) error.remove()
    showError(lastNameInput, 'Please enter a valid last name.')
  } else if (!password(passwordInput.value)) {
    const error = document.querySelector('.error-text')
    if (error !== null) error.remove()
    showError(passwordInput, 'The password must contain a minimum of 8 characters, a maximum of 16 characters, at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character and not contain blank spaces')
  }
  if (error !== null) error.remove()
}

export default { email, name, password, signUp }
