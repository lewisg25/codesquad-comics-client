import React from 'react';
import CodeSquadFooterLogo from '../../public/images/images/CodeSquad-logo.jpg'
const Footer = () => {
  return (
    <>
      <footer>
        <div>
            <h3>VISIT US</h3>
            <p>CodeSquad Comics</p>
            <p>123 Dorchester Ave</p>
            <p>Boston, MA 02124</p>
        </div>
        
        <div>
            <h3>LINKS</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </div>
        
        <div>
            <h3>FOLLOW US</h3>
            <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                 <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
               
            </ul>
        </div>
        <div class="footer-brand">
            <h3>A PRODUCT OF</h3>
            <a href="https://www.codesquad.org" target="_blank" rel="noopener noreferrer">
                <img src={CodeSquadFooterLogo} alt="CodeSquad Logo"/>
            </a>
        </div>
    </footer>
    </>
  );
};

export default Footer;