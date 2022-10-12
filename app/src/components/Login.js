const Login = () => {
  return `
  <div class="container">
        <h2 class="center">Log in to Expose</h2>
        <form>
            <label>
                Email
                <input type="email" required  >
            </label>
            <label>
                Password
                <input type="password" required min="6" max="30">
            </label>
            <button>Login</button>
            </form>
            <p>You do not have an account? <a href="#">Sign Up</a></p>
    </div>
        
    `
}

export default Login
