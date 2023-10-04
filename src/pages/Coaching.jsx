import { Fragment, useEffect } from "react";
import useFetchData from "../hooks/use-fetchData";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../components/UI/Error/Error";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import ContactForm from "../components/Forms/ContactForm";
import FAQComponent from "../components/FAQ/FAQComponent";
import SliderTestimonials from "../components/Slider/TestimonialsSlider";
import { ScrollRestoration } from "react-router-dom";
import bgImg from "../assets/coaching-bg.jpg";
import styles from "../styles/Coaching.module.css";

const Coaching = () => {
  useEffect(() => {
    document.title = "Супровід";
  }, []);

  const pageData = useFetchData("http://localhost:8000/coaching-page-data");

  return (
    <>
      {pageData.status === "loading" && <LoadingSpinner />}
      {pageData.error && <Error message={pageData.error} />}
      {pageData.data && (
        <Fragment>
          <SectionParallax
            bgImage={bgImg}
            title="Супровід"
            text="отримайте підтримку у досягненні цілей та на шляху саморозвитку і самопізнання"
          />
          <section className={styles.coachingDescription}>
            <p>
              Супровід базується на використанні коучинкових технік і вправ,
              інструментів кармічного менеджменту та духовних практик
            </p>
          </section>
          <Section>
            <List
              title="Які результати отримали мої клієнти після супроводу:"
              data={pageData.data.listItems}
            />
          </Section>
          <Divider>
            Запис на супровід призупинений та ви можете <br />
            стати в чергу
          </Divider>
          <Section>
            <ContactForm />
          </Section>
          <Divider>Відгуки</Divider>
          <Section>
            <SliderTestimonials data={pageData.data.testimonials} />
          </Section>
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

export default Coaching;
