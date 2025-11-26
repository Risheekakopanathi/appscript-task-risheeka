// components/Header.js
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* TOP HEADER */}
      <header className="header">
        <div className="header-left">
          <img src="/menu-icon.png" alt="menu" className="menu-icon" />
        </div>

        <div className="header-logo">LOGO</div>

        <div className="header-right">
          <FaSearch />
          <FaHeart />
          <FaShoppingBag />
          <FaUser />
          <div className="lang">ENG ▾</div>
        </div>
      </header>

      {/* NAVIGATION BAR */}
      <nav className="nav-menu">
         <Link href="/shop">SHOP</Link>
  <Link href="/skills">SKILLS</Link>
  <Link href="/stories">STORIES</Link>
  <Link href="/about">ABOUT</Link>
  <Link href="/contact">CONTACT US</Link>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>


     
      <div className="divider"></div>
    </>
  );
}
