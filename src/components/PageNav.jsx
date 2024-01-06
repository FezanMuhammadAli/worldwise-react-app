import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        listStyleType: "none",
        padding: "0",
        margin: "10px",
      }}
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </ul>
  );
}

export default PageNav;
