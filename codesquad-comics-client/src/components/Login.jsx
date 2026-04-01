import React from "react";

const Login = () => {
    return (
        <>
          <main className="container">
        <h1>Login</h1>
        <p>Please enter your credentials below:</p>
        <form action="#" method="POST" class="login">
            <div>
                <label for="username">Email Address:</label>
                <input type="text" id="username" name="username" placeholder="Email" required/>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder=" Password" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </main>
        </>
      
    )
}
export default Login