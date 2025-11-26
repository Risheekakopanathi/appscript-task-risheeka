export default function SkillsPage() {
  return (
    <div className="skills-page">
      <h1 className="skills-title">OUR SKILLS</h1>

      <p className="skills-sub">
        We combine creativity, craftsmanship, and innovation to deliver
        world-class products that set new standards in style and quality.
      </p>

      <div className="skills-grid">
        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" />
          <h3>Product Design</h3>
          <p>Beautiful and functional designs that stand out.</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png" />
          <h3>Quality Testing</h3>
          <p>Strict multi-level quality checks.</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
          <h3>Innovation</h3>
          <p>We bring new ideas with modern techniques.</p>
        </div>

        <div className="skill-card">
          <img src="https://cdn-icons-png.flaticon.com/512/808/808439.png" />
          <h3>24/7 Support</h3>
          <p>Always available to help you.</p>
        </div>
      </div>
    </div>
  );
}
