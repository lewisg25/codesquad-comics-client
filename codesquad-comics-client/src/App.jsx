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
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <>
   <div className="App">
      <Header user={user} setUser={setUser} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>

      <Footer />
    </div>
    </>
  );
}

export default App;
