import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch("https://course-project-codesquad-comics-server.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Signup failed");
        return response.json();
      })
      .then((data) => {
        console.log("Signup successful!");
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data); 
        navigate("/admin");
      })
      .catch((error) => console.error("Error during signup:", error));
  };

  return (
    <main className="container">
      <h1>Signup</h1>
      <p>Please enter your information below:</p>
      <form onSubmit={handleSignupSubmit} className="login">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Signup;