// components/ProductCard.js
import { FaRegHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  // Example: mark out of stock if rating count is even (demo)
  const outOfStock = product.rating && product.rating.count < 50 ? false : false;

  return (
    <article className="product-card" aria-label={product.title}>
      <div className="card-media">
        <img src={product.image} alt={product.title} />
        {/* Example badge */}
        {outOfStock && <span className="badge">OUT OF STOCK</span>}
      </div>

      <h4 className="card-title">{product.title}</h4>
      <div className="card-bottom">
        <div className="price">₹{product.price}</div>
        <div className="like"><FaRegHeart /></div>
      </div>

      <div className="signin-note">Sign in or Create an account to see pricing</div>
    </article>
  );
}
