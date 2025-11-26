export default function ShopPage() {
  return (
    <div className="shop-page">

      {/* PAGE TITLE */}
      <h1 className="shop-title">SHOP OUR COLLECTIONS</h1>
      <p className="shop-sub">
        Explore the latest trends and exclusive products curated just for you.
      </p>

      {/* PRODUCT GRID */}
      <div className="shop-grid">

        {/* CARD 1 */}
        <div className="shop-card">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Watch"
          />
          <h3>Premium Watch</h3>
          <p>₹3,499</p>
        </div>

        {/* CARD 2 */}
        <div className="shop-card">
          <img src="/handbag.png" className="handbag" />
          
          <h3>Leather Handbag</h3>
          <p>₹2,299</p>
        </div>

        {/* CARD 3 */}
        <div className="shop-card">
          <img src="/runningshoes.png" className="runningshoes" />
          
          <h3>Running Shoes</h3>
          <p>₹1,899</p>
        </div>

        {/* CARD 4 */}
        <div className="shop-card">
          <img src="/perfume.png" className="perfume" />
          <h3>Luxury Perfume</h3>
          <p>₹4,250</p>
        </div>

      </div>
    </div>
  );
}
