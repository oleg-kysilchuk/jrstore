import HomepageCard from "../components/UI/HomepageCard";
import imgAbout from "../assets/photo-julia.jpg";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.mainTitle}>Точки нашого дотику:</h1>
        <div className={styles.services}>
          <HomepageCard to='/matrix' className={styles.servicesItem} title="Матриця Долі" />
          <HomepageCard to='/bmscommunity'
            className={styles.servicesItem}
            title='Ком&apos;юніті "Be My Sister"'
          />
          <HomepageCard to='/coaching' className={styles.servicesItem} title="Супровід" />
          <HomepageCard to='/products'
            className={styles.servicesItem}
            title="Продукти в записі"
          />
        </div>
      </section>
      <section className={styles.about}>
        <img className={styles.aboutImage} src={imgAbout} alt="Про мене" />
        <div className={styles.aboutList}>
          <h3 className={styles.aboutTitle}>Про мене:</h3>
          <p className={styles.aboutSubtitle}>
            Мене звати Юля. Я сертифікований консультант в методі самопізнання
            "Матриця Долі", коуч та кармолог
          </p>
          <ul className={styles.list}>
            <p className={styles.listTitle}>Моя місія:</p>
            <li className={styles.listItem}>
              допомога в розкритті духовного потенціалу людини
            </li>
            <li className={styles.listItem}>
              об'єднання в одному полі жінок, що хочуть глибше пізнати себе
              та світ
            </li>
            <li className={styles.listItem}>
              передача знань про духовну природу людини
            </li>
          </ul>
          <ul className={styles.list}>
            <p className={styles.listTitle}>
              Переконання, які я використовую в роботі, і в яких важливо, щоб ми
              з вами співпадали:
            </p>
            <li className={styles.listItem}>Бог є</li>
            <li className={styles.listItem}>життя має сенс і призначення</li>
            <li className={styles.listItem}>
              те, що ми маємо зараз, обумовлено кармою нашого минулого
            </li>
            <li className={styles.listItem}>реінкарнація існує</li>
            <li className={styles.listItem}>
              керуючи думками, ми керуємо своєю долею
            </li>
            <li className={styles.listItem}>
              наперед визначена не доля, а потенціал
            </li>
            <li className={styles.listItem}>
              людина - духовна істота, що має досвід матеріального проживання
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
