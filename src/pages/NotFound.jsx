import { NavLink } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfoundContainer}>
      <p className={styles.notfoundText}>Ой-ой, щось пішло не так...</p>
      <p className={styles.notfoundText}>Помилка 404.</p>
      <NavLink to="/" className={styles.notfoundLink}>
        Повернутися на головну
      </NavLink>
    </div>
  );
};

export default NotFound;
