import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div
        className="slogan"
        style={{
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        WorldWise- Yeah We find it
      </div>
      <Link to="/pricing">Pricing</Link>
      <br />
      <Link to="/product">Product</Link>
    </>
  );
}

export default Homepage;
