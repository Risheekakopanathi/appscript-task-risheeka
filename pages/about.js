export default function AboutPage() {
  return (
    <div className="about-page">

      {/* TITLE */}
      <h1 className="about-title">ABOUT US</h1>

      {/* SUBTEXT */}
      <p className="about-sub">
        We are a modern lifestyle brand focused on delivering quality, style, 
        and comfort through our carefully curated products.
      </p>

      {/* IMAGE BANNER */}
      <div className="about-banner">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" 
          alt="About Banner"
        />
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Our journey began with a simple idea — to make high-quality products 
          accessible to everyone. Today, we offer a wide range of fashion and 
          lifestyle items designed with love, precision, and passion.
        </p>

        <h2>Our Vision</h2>
        <p>
          We aim to create a seamless shopping experience that blends modern 
          technology with timeless style. Our mission is to inspire confidence 
          and creativity in every individual who uses our products.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Premium quality products</li>
          <li>✔ Fast & reliable delivery</li>
          <li>✔ Secure online shopping experience</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>
    </div>
  );
}
