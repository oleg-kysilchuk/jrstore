import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import bgImg from "../assets/coaching-bg.jpg";
import Divider from "../components/UI/Divider/Divider";
import Section from "../components/UI/Section/Section";
import ContactForm from "../components/Forms/ContactForm";

import styles from "../styles/Coaching.module.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";

const Coaching = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Супровід"
        text="отримайте підтримку у досягненні цілей та на шляху саморозвитку і самопізнання"
      />
      <Divider thin>
        Супровід базується на використанні коучинкових технік і вправ,
        інструментів кармічного менеджменту та духовних практик
      </Divider>
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
      <Divider bold>
        Запис на супровід призупинений та ви можете <br />
        стати в чергу
      </Divider>
      <Section>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </Section>
      <Divider medium>Відповіді на популярні запитання</Divider>
    </>
  );
};

export default Coaching;
