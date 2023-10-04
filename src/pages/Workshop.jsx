import { Fragment } from "react";
import useFetchData from "../hooks/use-fetchData";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../components/UI/Error/Error";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import Divider from "../components/UI/Divider/Divider";
import ContactForm from "../components/Forms/ContactForm";
import FAQComponent from "../components/FAQ/FAQComponent";
import { ScrollRestoration } from "react-router-dom";
import bgImg from "../assets/workshop1-bg.jpg";
import styles from "../styles/Workshop.module.css";

const Workshop = () => {
  const { status, error, data } = useFetchData(
    "http://localhost:8000/workshops-data"
  );
  
  return (
    <>
      {status === "loading" && <LoadingSpinner />}
      {error && <Error message={error} />}
      {data && (
        <Fragment>
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
            <List title={"Що розглянемо:"} data={data.workshop01.listItems} />
          </Section>
          <Divider>Замовити за ціною 1111 грн</Divider>
          <Section>
            <ContactForm workshop />
          </Section>
          <Divider>Відповіді на популярні запитання</Divider>
          <Section>
            <FAQComponent data={data.workshop01.faqData} />
          </Section>
          <ScrollRestoration />
        </Fragment>
      )}
    </>
  );
};

export default Workshop;
