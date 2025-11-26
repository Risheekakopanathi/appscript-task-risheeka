

export default function ContactPage() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">CONTACT US</h1>
      <p className="contact-desc">
        We’d love to hear from you! Feel free to reach out to us anytime.
      </p>

      <div className="contact-grid">

        <div className="contact-form">
          <h2>Send us a message</h2>

          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Write your message here..."></textarea>

          <button className="submit-btn">SEND MESSAGE</button>
        </div>

        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> 123 Fashion Street, India</p>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="icons">
               <img src="/instagram.png" className="instagram" />
           <img src="/Linkedin.png" className="Linkedin" />

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
