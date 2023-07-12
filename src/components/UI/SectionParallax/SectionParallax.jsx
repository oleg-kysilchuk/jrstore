import styles from "./SectionParallax.module.css";

const SectionParallax = (props) => {
  return (
    <section
      style={{ backgroundImage: `url(${props.bgImage})` }}
      className={styles.bgParallax}
    >
      <div className={styles.mask}>
          <div className={styles.badge}>
            <h3 className={styles.badgeTitle}>{props.title}</h3>
            <p className={styles.badgeText}>{props.text}</p>
          </div>
        </div>
    </section>
  );
};

export default SectionParallax;
