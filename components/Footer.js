export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SUBSCRIBE SECTION */}
      <div className="footer-top">

        <div className="left-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="right-section">

          <div className="contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className="currency">
            <h4>CURRENCY</h4>
           

            {/* FLAG + USD */}
            <div className="flag-row">
              <img src="/Flag.png" className="Flag" />

              <span>USD</span>
            </div>

            <p className="note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>

        </div>

      </div>

      <hr className="divider" />

      {/* BOTTOM FOOTER GRID */}
      <div className="footer-grid">

        <div className="col">
          <h3>mettā muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div className="col">
          <h3>QUICK LINKS</h3>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        
      

        <div className="col">
          <h3>FOLLOW US</h3>

          <div className="social">
           <img src="/instagram.png" className="instagram" />
           <img src="/Linkedin.png" className="Linkedin" />


          </div>

          <h3 className="accept-title">mettā muse ACCEPTS</h3>

          <div className="payments">
            <img src="/visa.png" className="visa" />
            <img src="/master.png" className="master" />
            <img src="/paypal.png" className="paypal" />
            <img src="/Amex.png"  className="Amex"/>
            <img src="/applepay.png" className="applepay" />
            <img src="/gpay.png" className="gpay" />
          </div>
        </div>

      </div>

      <p className="copy">Copyright © 2023 mettamuse. All rights reserved.</p>

    </footer>
  );
}
