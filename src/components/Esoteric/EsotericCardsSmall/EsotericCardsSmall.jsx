import Section from "../../UI/Section/Section";
import EsotericCardSmallItem from "./EsotericCardSmallItem";
import styles from "./EsotericCardsSmall.module.css";

const EsoreticCardsSmall = (props) => {
  return (
    <Section>
      <h3 className={styles.cardsTitle}>{props.title}</h3>
      <div className={styles.cardsContainer}>
        {props.data.map((item, index) => (
          <EsotericCardSmallItem
            key={`${index}${item.title}`}
            src={item.src}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </Section>
  );
};

export default EsoreticCardsSmall;
