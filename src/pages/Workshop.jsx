import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import Divider from "../components/UI/Divider/Divider";
import ContactForm from '../components/Forms/ContactForm';
import FAQComponent from "../components/FAQ/FAQComponent";
import * as workshopData from '../components/util/workshops-data';
import bgImg from "../assets/workshop1-bg.jpg";
import styles from "../styles/Workshop.module.css";



const Workshop = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Воркшоп №1"
        text={'В рамках програми "Матриціологія"'}
      />
      <Section>
        <div className={styles.workshopContainer}>
          <h1 className={styles.workshopTitle}>
            Глибинне розуміння 22 енергій Матриці Долі та трактування їх в
            потенціалі особистості
          </h1>
          <p className={styles.workshopSubtitle}>24 відео в записі</p>
          <div className={styles.workshopItems}>
            <p className={styles.workshopDescription}>
              22 лекції, присвячені розумінню енергій
            </p>
            <p className={styles.workshopDescription}>
              2 відео-записи практичних занять
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <List title={'Що розглянемо:'} data={workshopData.listItemsWorkshop1} />
      </Section>
      <Divider>
        Замовити за ціною 1111 грн
      </Divider>
      <Section>
        <ContactForm workshop />
      </Section>
      <Divider>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent workshop />
      </Section>
    </>
  );
};

export default Workshop;
