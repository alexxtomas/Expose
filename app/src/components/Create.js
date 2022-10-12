const Create = () => {
  return `
    <h1>Talk About Something</h1>
    <form>
        <label>
            What are you going to talk about?
            <input type="text" id="title">
        </label>
        <label>
        Express yourself
            <textarea type="text" id="content"></textarea>
        </label>
        <button>Create</button>
    </form>
   `
}

export default Create
