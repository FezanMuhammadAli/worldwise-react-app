import { Link } from "react-router-dom";

function Product() {
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
        Product Page
      </div>
      <Link to="/">HomePage</Link>
      <br />
      <Link to="/pricing">Pricing</Link>
    </>
  );
}

export default Product;
