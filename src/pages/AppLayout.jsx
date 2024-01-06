import { NavLink } from "react-router-dom";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <>
      <div className={styles.container}>
        <marquee>I am App!</marquee>
        <ul>
          <li>
            <NavLink to="/" className={styles.link}>
              HomePage
            </NavLink>
          </li>
        </ul>
      </div>
      ;
    </>
  );
}

export default AppLayout;
