import { useEffect } from "react";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import ContactForm from "../components/Forms/ContactForm";
import FAQComponent from "../components/FAQ/FAQComponent";
import SliderTestimonials from "../components/Slider/TestimonialsSlider";
import { ScrollRestoration } from "react-router-dom";
import * as coachingPageData from "../components/util/coachingPage-data";
import bgImg from "../assets/coaching-bg.jpg";
import styles from "../styles/Coaching.module.css";

const Coaching = () => {
  useEffect(() => {
    document.title = "Супровід";
  }, []);

  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Супровід"
        text="отримайте підтримку у досягненні цілей та на шляху саморозвитку і самопізнання"
      />
      <section className={styles.coachingDescription}>
        <p>Супровід базується на використанні коучинкових технік і вправ,
        інструментів кармічного менеджменту та духовних практик</p>
      </section>
      <Section>
        <List title="Які результати отримали мої клієнти після супроводу:" data={coachingPageData.listItems} />
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
        <SliderTestimonials data={coachingPageData.testimonials} />
      </Section>
      <Divider>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent pageType='coachingPage' />
      </Section>
      <ScrollRestoration />
    </>
  );
};

export default Coaching;
