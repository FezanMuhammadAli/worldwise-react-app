import PageNav from "../components/PageNav";

function Product() {
  return (
    <>
      <PageNav />
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
    </>
  );
}

export default Product;
