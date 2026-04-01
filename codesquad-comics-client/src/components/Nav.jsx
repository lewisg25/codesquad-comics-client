import React from 'react'
import CodeSquadLogo from '../../public/images/images/CodeSquad-Comics-logo.jpg'

const Nav = () => {
  return (
    <>
    <div className='header'>
   <img src={CodeSquadLogo} className="base"  alt="" />
   <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
    </div>
    </>

  )
};

export default Nav


