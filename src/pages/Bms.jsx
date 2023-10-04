import { Fragment, useEffect } from "react";
import useFetchData from "../hooks/use-fetchData";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../components/UI/Error/Error";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Subscriptions from "../components/Subscriptions/Subscriptions";
import SubscriptionOffers from "../components/Subscriptions/SubscriptionOffers";
import Section from "../components/UI/Section/Section";
import TestimonialsSlider from "../components/Slider/TestimonialsSlider";
import Achievements from "../components/Achievements/Achievements";
import Divider from "../components/UI/Divider/Divider";
import FAQComponent from "../components/FAQ/FAQComponent";
import { ScrollRestoration } from "react-router-dom";
import bgImg from "../assets/bms-bg.jpg";
import styles from "../styles/Bms.module.css";

const Bms = () => {
  useEffect(() => {
    document.title = "Be My Sister";
  }, []);

  const pageData = useFetchData(
    "http://localhost:8000/bms-page-data"
  );

  const productsData = useFetchData(
    "http://localhost:8000/products-data"
  );

  return (
    <>
      {pageData.status === "loading" ||
        (productsData.status === "loading" && <LoadingSpinner />)}
      {pageData.error || (productsData.error && <Error message={pageData.error || productsData.error} />)}
      {pageData.data && productsData.data && (
        <Fragment>
          <SectionParallax
            bgImage={bgImg}
            title="Be My Sister"
            text="станьте важливою частиною жіночої спільноти і не будьте більше самотні на шляху самопізнання"
          />
          <section className={styles.description}>
            <div className={styles.descriptionText}>
              <span className={styles.descriptionHighlight}>Be My Sister </span>
              - спільнота для жінок, які цікавляться особистісним та духовним
              розвитком, психологією, езотерикою, пропрацюванням травм та
              переконань. Місія спільноти - об'єднати в одному полі тих, хто
              потребує підтримки та тих, хто може її надати
            </div>
          </section>
          <Subscriptions />
          {productsData.data && <SubscriptionOffers data={productsData.data.subscriptions} />}
          <Divider>Відгуки</Divider>
          <Section>
            <TestimonialsSlider data={pageData.data.testimonials} />
          </Section>
          <Achievements data={pageData.data.achievements} />
          <Divider>Відповіді на популярні запитання</Divider>
          <Section>
            <FAQComponent data={pageData.data.faqData} />
          </Section>
          <ScrollRestoration />
        </Fragment>
      )}
    </>
  );
};

export default Bms;
