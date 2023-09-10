import EsotericWorkplanItem from "./EsotericWorkplanItem";
import styles from "./EsotericWorkplan.module.css";

const EsotericWorkplan = (props) => {
  return (
    <section className={styles.workplanSection}>
      <h2 className={styles.workplanTitle}>ПЛАН РОБОТИ</h2>
      <div className={styles.workplanContainer}>
        {props.data.map((item, index) => (
          <EsotericWorkplanItem
            key={`${index}${item.title}`}
            title={item.title}
            listData={item.items}
            labelNum={index + 1}
          />
        ))}
        <div className={styles.verticalLine}></div>
      </div>
    </section>
  );
};

export default EsotericWorkplan;
