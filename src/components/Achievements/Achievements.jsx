import styles from "./Achievements.module.css";

const Achievements = (props) => {
  return (
    <div className={styles.achievementsContainer}>
      {props.data.map((item) => (
        <div key={item.id} className={styles.achievementItem}>
          <p className={styles.achievementNumbers}>{item.numbers}</p>
          <hr className={styles.line} />
          <p className={styles.achievementText}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
