import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CodeSquadLogo from "../../public/images/images/CodeSquad-Comics-logo.jpg";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    fetch("https://course-project-codesquad-comics-server.onrender.com/logout", {
      method: "POST",
    })
      .then((response) => {
      
        console.log("Logged out successfully");
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
       
        console.error("Logout failed:", error);
        navigate("/admin");
      });
  };

  return (
    <header>
      <Link to="/">
        <img src={CodeSquadLogo} className="base" alt="CodeSquad Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          {user.username ? (
            <>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>LOGOUT</a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;