import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <>
      <PageNav />
      <div
        className="test"
        style={{
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        WorldWise- Yeah We find it
      </div>
      <NavLink to="/app">Go to the app</NavLink>
    </>
  );
}

export default Homepage;
