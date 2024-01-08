import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParam] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Maps</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      {/* <button onClick={() => setSearchParam({ lat: 40.73061, lng: 23 })}>
        Change Position
      </button> */}
    </div>
  );
}

export default Map;
