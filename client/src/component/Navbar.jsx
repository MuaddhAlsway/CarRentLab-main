import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 
    return (
    <nav className="navbar">
        <div className="logo">
            <h1>CarRentLab</h1>
        </div>
        <ul className={`navbarContainer ${menuOpen ? 'mobile-active' : ''}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>AboutUs</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/rents" onClick={() => setMenuOpen(false)}>Rent</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>ContactUS</Link></li>
        </ul>
        <div className="authButtons">
            <button className="loginBtn"><Link to="/Login">Login</Link></button>
            <button className="signupBtn"><Link to="/signup">Sign Up</Link></button>
        </div>

        <div className="menuIcons" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
    </nav>
  )
}
export default Navbar