import Section from "../../UI/Section/Section";
import EsotericCardItem from "./EsotericCardItem";
import styles from "./EsotericCards.module.css";

const EsotericCards = (props) => {
  return (
    <Section>
      <h2 className={styles.titleSmall}>Для кого?</h2>
      <div className={styles.cardsContainer}>
          {props.data.map((item, index) => (
            <EsotericCardItem key={`${index}${item.title}`} src={item.src} title={item.title} text={item.text} />
          ))}
      </div>
    </Section>
  );
};

export default EsotericCards;
