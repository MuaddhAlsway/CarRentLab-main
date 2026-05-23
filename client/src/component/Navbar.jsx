import './Navbar.css'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 
    return (
    <nav className="navbar">
        <div className="logo">
            <h1>CarRentLab</h1>
        </div>
        <ul className={`navbarContainer ${menuOpen ? 'mobile-active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">AboutUs</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/rents">Rent</a></li>
            <li><a href="/contact">ContactUS</a></li>
        </ul>
        <div className="authButtons">
        <button className="loginBtn"><a href="/login">Login</a></button>
        <button className="signupBtn"><a href="/signup">Sign Up</a></button>
        </div>

        <div className="menuIcons" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      
      
    </nav>
  )
}
export default Navbar