const SignUp = () => {
  return `
        <h2 class="center">Sign Up Now</h2>
            <form>
                <label>
                    Name
                    <input id="name" type="text" minlength="3" maxlength="12" required m>
                </label>
                <label>
                    Last name
                    <input id="last-name" type="text" minlength="3" maxlength="12" required>
                </label>
                <label>
                    Address
                    <input id="address" type="text" required>
                </label>
                <label>
                    Email
                    <input id="email" type="text" required>
                </label>
                <label>
                    Password
                    <input id="password" type="password" required>
                </label>
                <button type="submit" >Sign Up</button>
            </form>
    `
}
export default SignUp
