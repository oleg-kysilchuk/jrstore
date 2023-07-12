import styles from "./Divider.module.css";

const Divider = (props) => {
  let style;

  if (props.bold) {
    style = styles.bold;
  }
  if (props.medium) {
    style = styles.medium;
  }
  if (props.thin) {
    style = styles.thin;
  }

  return (
    <section className={`${styles.divider} ${style}`}>
      <p className={styles.text}>{props.children}</p>
    </section>
  );
};

export default Divider;
