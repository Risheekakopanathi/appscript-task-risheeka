export default function StoriesPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "700" }}>
        STORIES
      </h1>

      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
        Welcome to the Stories section!  
        Here you will find inspiring stories, featured collections,
        brand journeys, designer stories and creative inspirations.
      </p>

      <br />

      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px"
      }}>
        
        {/* Story Card 1 */}
        <div style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>
          <img 
            src="/story1.jpg" 
            alt="Story 1" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3 style={{ marginTop: "12px", fontSize: "18px" }}>Designer Journey</h3>
          <p style={{ fontSize: "14px", color: "#777" }}>
            Learn how our top designers create timeless pieces.
          </p>
        </div>

        {/* Story Card 2 */}
        <div style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>
          <img 
            src="/story2.jpg" 
            alt="Story 2" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3 style={{ marginTop: "12px", fontSize: "18px" }}>Brand Evolution</h3>
          <p style={{ fontSize: "14px", color: "#777" }}>
            Follow the story of how our brand evolved.
          </p>
        </div>

        {/* Story Card 3 */}
        <div style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>
          <img 
            src="/story3.jpg" 
            alt="Story 3" 
            style={{ width: "100%", borderRadius: "8px" }} 
          />
          <h3 style={{ marginTop: "12px", fontSize: "18px" }}>Customer Spotlight</h3>
          <p style={{ fontSize: "14px", color: "#777" }}>
            Featuring amazing customers and their outfits.
          </p>
        </div>

      </div>
    </div>
  );
}
