import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Nav from './components/Nav'
import Header from './data/Header'
import About from './components/About'
import Footer from './data/Footer' 
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Update from './components/Update'
import books from './data/books'
function App() {
  
  return (
    <>
    <Header/>
     <Home/>
  <About/>
   <Login/>
    <Admin/>
   <Create/>
     <Update/>
      <Footer/>
    </>
  )
}

export default App
