import Section from "../../UI/Section/Section";
import EsotericCardItem from "./EsotericCardItem";
import { clientsData } from "../../util/esotericPage-data";
import styles from "./EsotericCards.module.css";

const EsotericCards = () => {
  return (
    <Section>
      <h2 className={styles.titleSmall}>Для кого?</h2>
      <div className={styles.cardsContainer}>
          {clientsData.map((item) => (
            <EsotericCardItem key={item.id} src={item.src} title={item.title} text={item.text} />
          ))}
      </div>
    </Section>
  );
};

export default EsotericCards;
