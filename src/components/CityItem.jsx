import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.name}>{cityName}</span>
      <span className={styles.date}>({formatDate(date)})</span>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
