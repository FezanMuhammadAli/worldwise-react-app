import { Link } from "react-router-dom";
function Pricing() {
  return (
    <>
      <div
        style={{
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Pricing Page
      </div>
      <Link to="/">HomePage</Link>
      <br />
      <Link to="/product">Product</Link>
    </>
  );
}

export default Pricing;
