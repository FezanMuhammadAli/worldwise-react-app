import PageNav from "../components/PageNav";
function PageNotFound() {
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
        Not Found :(
      </div>
    </>
  );
}

export default PageNotFound;
