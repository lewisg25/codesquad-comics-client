import React from "react"
const Signup = () => {
    return (
        <>
          <main className="container">
        <h1>Login</h1>
        <p>Please enter your credentials below:</p>
        <form action="#" method="POST" class="login">
            <div>
                <label for="username">First Name:</label>
                <input type="text" id="username" name="username" placeholder="First Name" required/>
            </div>
            <div>
                <label for="password">Last Name:</label>
                <input type="password" id="password" name="password" placeholder=" Last Name" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </main>
        </>
      
    )
}
export default Signup