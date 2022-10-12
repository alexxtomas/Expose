import exposeSevices from '../services/exposeSevices'

const PostDetails = async (id) => {
  const post = await exposeSevices.getPostById(id)
  const { title, content, comments } = post[0]
  console.log(post)
  return `
  <div class="container-fluid">
    <h1>
     ${title}
    </h1>
    <p>p${content}</p>
    <h3>Comments</h3>
    <ul>
    ${comments?.map(comment => `<li>${comment}</li>`)}
    
    </ul>
    <button class="add-comment">Add comment</button>

    </div>
  
  `
}

export default PostDetails
