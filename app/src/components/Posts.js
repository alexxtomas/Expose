import exposeSevices from '../services/exposeSevices'
import { removeComas } from '../utils/removeComas'

const Posts = async () => {
  const data = await exposeSevices.getAllUsers()
  console.log(data)
  const posts = await data.map((user) => {
    return user.posts.map(({ id, title, content, images, comments }) => {
      return `
        <div id="${id}" class="container post">
        <h1 id="${id}">${title}</h1>
        <small id="${id}">Created By: ${user.name} ${user.lastName}</small>
        </div>
      `
    })
  })
  return removeComas(posts.toString())
}
export default Posts
