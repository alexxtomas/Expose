import exposeService from '../services/exposeSevices'

export const checkUserLogin = async () => {
  let isLogged
  const credentials = JSON.parse(window.localStorage.getItem('user'))
  if (credentials === null) {
    isLogged = false
    return isLogged
  }

  const allUsersCredentials = await exposeService.getAllUsers('credentials')

  isLogged = allUsersCredentials.find(({ email, password }) => password === credentials.password && email === credentials.email) !== undefined
  return isLogged
}
