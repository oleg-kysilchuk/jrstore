import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import bgImg from "../assets/coaching-bg.jpg";
import Divider from "../components/UI/Divider/Divider";
import Section from "../components/UI/Section/Section";
import ContactForm from "../components/Forms/ContactForm";
import styles from "../styles/Coaching.module.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import FAQComponent from "../components/FAQ/FAQComponent";
import SliderTestimonials from "../components/Slider/Slider";
import { testimonials } from "../components/util/coachingPage-data";

const Coaching = () => {
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
        <List title="Які результати отримали мої клієнти після супроводу:">
          <ListItem>
            Отримання додаткових джерел доходу завдяки монетизації ідей, до яких
            не доходили руки
          </ListItem>
          <ListItem>
            Реалізація творчих проєктів завдяки розумінню що і за чим робити
          </ListItem>
          <ListItem>
            Підвищення загального рівня вмотивованості завдяки стану ясності і
            спокою
          </ListItem>
        </List>
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
        <SliderTestimonials data={testimonials} />
      </Section>
      <Divider>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent coachingPage />
      </Section>
    </>
  );
};

export default Coaching;
