import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <PageNav />
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
    </>
  );
}

export default Homepage;
