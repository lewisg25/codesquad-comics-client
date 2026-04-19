import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch("https://course-project-codesquad-comics-server.onrender.com/login/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Login failed");
        return response.json();
      })
      .then((data) => {
        console.log("Login successful!");
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data); 
        navigate("/admin");
      })
      .catch((error) => console.error("Error during login:", error));
  };

  return (
    <main className="container">
      <h1>Login</h1>
      <p>Please enter your credentials below:</p>
      <form onSubmit={handleLoginSubmit} className="login">
        <div>
          <label htmlFor="username">Email Address:</label>
          <input type="text" id="username" name="username" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Login;
