import axios from 'axios'

const APIUrl = 'http://localhost:8080/users'

const createUser = async (user) => {
  const response = await axios.post(APIUrl, user)
  return response
}

const getAllUsers = async (param = '') => {
  let { data } = await axios.get(APIUrl)

  if (param === 'credentials') {
    data = data.map(({ email, password }) => ({
      email,
      password

    }))
  }
  return data
}

export default { createUser, getAllUsers }
