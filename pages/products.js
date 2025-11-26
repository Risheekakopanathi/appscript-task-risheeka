// pages/products.js
import { useState } from "react";

import Header from "../components/Header";
import FilterPanel from "../components/FilterPanel";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Products({ products }) {
  
  // Sort Dropdown State
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  return (
    <>
      <Header />

      <main className="page-wrapper">

        {/* 🔵 MAIN LAYOUT (FILTERS + PRODUCTS) */}
        <div className="layout">

          {/* LEFT — FILTER PANEL */}
          <FilterPanel />

          {/* RIGHT — PRODUCTS SECTION */}
          <section className="content">

            {/* 🔵 TOP BAR (Count + Hide Filter + Sort Dropdown) */}
            <div className="list-top">

              <span className="results-count">3425 ITEMS</span>

              <span className="hide-filter">‹ HIDE FILTER</span>

              {/* SORT DROPDOWN */}
              <div className="sort-dropdown">
                <button className="sort-button" onClick={() => setOpen(!open)}>
                  {selected} ▾
                </button>

                {open && (
                  <div className="sort-menu">

                    <div className="sort-item active">
                      ✔ RECOMMENDED
                    </div>

                    <div
                      className="sort-item"
                      onClick={() => { setSelected("NEWEST FIRST"); setOpen(false); }}
                    >
                      NEWEST FIRST
                    </div>

                    <div
                      className="sort-item"
                      onClick={() => { setSelected("POPULAR"); setOpen(false); }}
                    >
                      POPULAR
                    </div>

                    <div
                      className="sort-item"
                      onClick={() => { setSelected("PRICE : HIGH TO LOW"); setOpen(false); }}
                    >
                      PRICE : HIGH TO LOW
                    </div>

                    <div
                      className="sort-item"
                      onClick={() => { setSelected("PRICE : LOW TO HIGH"); setOpen(false); }}
                    >
                      PRICE : LOW TO HIGH
                    </div>

                  </div>
                )}
              </div>
            </div>

            {/* 🔵 PRODUCT GRID */}
            <div className="grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

// FETCH PRODUCTS
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
}
