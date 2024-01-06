import { Link } from "react-router-dom";
function PageNotFound() {
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
        Not Found :(
      </div>

      <Link to="/">HomePage</Link>
    </>
  );
}

export default PageNotFound;
