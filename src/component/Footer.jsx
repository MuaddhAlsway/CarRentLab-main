import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">

        {/* About Section */}
        <div className="footerAbout">
          <h2>CarRentals</h2>
          <p>
            Rent your dream car easily and quickly. We provide top-quality vehicles with flexible rental options for city drives or long trips.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footerContact">
          <h3>Contact</h3>
          <p>Email: support@carrentals.com</p>
          <p>Phone: +966 555 123 456</p>
          <p>Address: Riyadh, Saudi Arabia</p>
        </div>

        {/* Social Media */}
        <div className="footerSocial">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} CarRentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
