import axios from 'axios'

const APIUrl = 'https://expose-backend.onrender.com/users'

const createUser = async (user) => {
  const response = await axios.post(APIUrl, user)
  return response
}

const getAllUsers = async (param) => {
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

const getUserById = async (id) => {
  const { data } = await axios.get(`${APIUrl}/${id}`)
  return data
}

const createPost = async (post) => {
  const userCredentials = JSON.parse(window.localStorage.getItem('user'))
  const users = await getAllUsers()
  const userWhoMadePost = users.find(({ email, password }) => (email === userCredentials.email) && (password === userCredentials.password))
  const response = await axios.put(`${APIUrl}/${userWhoMadePost.id}`, {
    ...userWhoMadePost,
    posts: [...userWhoMadePost.posts, post]
  })
  console.log(response)
}

const getPostById = async (id) => {
  const users = await getAllUsers()
  const post = await users.map(user => {
    return user.posts.find(post => post.id === id)
  })

  return post
}

const createComment = async (comment) => {
  const userCredentials = JSON.parse(window.localStorage.getItem('user'))
  const users = await getAllUsers()
  const userWhoMadePost = users.find(({ email, password }) => (email === userCredentials.email) && (password === userCredentials.password))
  console.log(userWhoMadePost)
  const response = await axios.put(`${APIUrl}/${userWhoMadePost.id}`, {
    ...userWhoMadePost,
    comments: [...userWhoMadePost.comments, comment]
  })

  console.log(response)
}
export default { createUser, getAllUsers, getUserById, createPost, getPostById, createComment }
