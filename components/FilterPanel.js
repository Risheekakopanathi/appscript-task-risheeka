// components/FilterPanel.js

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FilterPanel() {
  const [open, setOpen] = useState({
    ideal: true,
    occasion: true,
    work: true,
    fabric: true,
    segment: true,
    suitable: true,
    raw: true,
    pattern: true,
  });

  const toggle = (name) => {
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <aside className="filter-panel">

      {/* CUSTOMIZABLE */}
      <div className="filter-row checkbox-row">
        <input type="checkbox" />
        <label>CUSTOMIZABLE</label>
      </div>

      {/* IDEAL FOR */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("ideal")}>
          <span>IDEAL FOR</span>
          {open.ideal ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.ideal && <p className="filter-option">All</p>}
      </div>

      {/* OCCASION */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("occasion")}>
          <span>OCCASION</span>
          {open.occasion ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.occasion && <p className="filter-option">All</p>}
      </div>

      {/* WORK */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("work")}>
          <span>WORK</span>
          {open.work ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.work && <p className="filter-option">All</p>}
      </div>

      {/* FABRIC */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("fabric")}>
          <span>FABRIC</span>
          {open.fabric ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.fabric && <p className="filter-option">All</p>}
      </div>

      {/* SEGMENT */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("segment")}>
          <span>SEGMENT</span>
          {open.segment ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.segment && <p className="filter-option">All</p>}
      </div>

      {/* SUITABLE FOR */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("suitable")}>
          <span>SUITABLE FOR</span>
          {open.suitable ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.suitable && <p className="filter-option">All</p>}
      </div>

      {/* RAW MATERIALS */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("raw")}>
          <span>RAW MATERIALS</span>
          {open.raw ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.raw && <p className="filter-option">All</p>}
      </div>

      {/* PATTERN */}
      <div className="filter-block">
        <div className="filter-header" onClick={() => toggle("pattern")}>
          <span>PATTERN</span>
          {open.pattern ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {open.pattern && <p className="filter-option">All</p>}
      </div>

    </aside>
  );
}
