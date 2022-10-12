const SignUp = () => {
  return `
        <h2 class="center">Sign Up Now</h2>
            <form>
                <label>
                    Name
                    <input type="text" required>
                </label>
                <label>
                    Last name
                    <input type="text" required>
                </label>
                <label>
                    Address
                    <input type="text" required>
                </label>
                <label>
                    Email
                    <input type="email" required>
                </label>
                <label>
                    Password
                    <input type="password" required>
                </label>
                <button>Sign Up</button>
            </form>
    `
}
export default SignUp
