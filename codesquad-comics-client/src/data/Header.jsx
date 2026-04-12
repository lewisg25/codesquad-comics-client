import React from "react";
import CodeSquadLogo from "../../public/images/images/CodeSquad-Comics-logo.jpg";
const Header = () => {
  return (
    <>
      <header>
        <a href="index.html">
          <img src={CodeSquadLogo} className="base" alt="" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
