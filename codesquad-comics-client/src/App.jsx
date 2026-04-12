import { useState } from "react";
import "./App.css";
import Header from "./data/Header";
import About from "./components/About";
import Footer from "./data/Footer";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";
import Signup from "./components/Signup";
import images from "./images/images";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Home />
      <About />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
      <Admin />
      <Create />
      <Update />
      <Footer />
    </>
  );
}

export default App;
