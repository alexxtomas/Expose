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
  } else if (param === 'completeNames') {
    data = data.map(({ name, lastName }) => ({
      fullName: `${name} ${lastName}`
    }))
  } else if (param === 'emails') {
    data = data.map(({ email }) => ({
      email
    }))
  }
  return data
}

export default { createUser, getAllUsers }
