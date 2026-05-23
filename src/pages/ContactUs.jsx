import Footer from '../component/Footer';
import './Contact.css';

const ContactPage = () => {
  return (
    <div>

    
    <div className="contactPage">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below or reach us through our contact info.</p>
      </div>

      <div className="contactContent">
        {/* Form Section */}
        <form className="contactForm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info Section */}
        <div className="contactInfo">
          <h2>Our Contact Info</h2>
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Phone:</strong> +966 123 456 789</p>
          <p><strong>Address:</strong> Riyadh, Saudi Arabia</p>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
    
     
  );
};

export default ContactPage;
