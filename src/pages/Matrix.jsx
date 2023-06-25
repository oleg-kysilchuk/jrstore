import SectionParallax from "../components/UI/SectionParallax";
import Divider from "../components/UI/Divider";
import Form from "../components/forms/Form";
import bgImg from "../assets/matrix-bg.jpg";
import styles from "../styles/Matrix.module.css";
import { guidesData } from "../components/util/products-data";
import ProductCard from "../components/UI/ProductCard/ProductCard";

const Matrix = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Матриця Долі"
        text="Отримайте можливість прийняти свою силу і слабкість, зцілити самооцінку, повірити в себе і стати вільними від чужих шаблонів"
      />
      <Divider thin>
        Матриця Долі - унікальна система самопізнання, яка завдяки зашифрованій
        в даті народження інформації здатна допомогти розкрити потенціал своєї
        особистості, усвідомити кармічні задачі та призначення в різних сферах
        життя
      </Divider>
      <section className={styles.listResults}>
        <div className={styles.listWrap}>
          <h3 className={styles.listTitle}>
            Які результати отримали <br />
            мої клієнти після консультації:
          </h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Набуття стану ясності та розслаблення через розуміння себе та тих
              процесів, що відбуваються в житті
            </li>
            <li className={styles.listItem}>
              Усвідомлення того, куди рухатися далі, та віра, що все вийде
            </li>
            <li className={styles.listItem}>
              Збільшення доходу в кілька разів, покращення якості життя
            </li>
            <li className={styles.listItem}>
              Поліпшення відносин із партнером, перезавантаження сфери відносин
            </li>
            <li className={styles.listItem}>
              Прийняття себе, налагодження контакту з собою, усвідомлення своєї
              сили та «тіні»
            </li>
            <li className={styles.listItem}>
              Набуття улюбленої справи, нової професії
            </li>
            <li className={styles.listItem}>
              Поліпшення стосунків з батьками, відпускання образ
            </li>
            <li className={styles.listItem}>
              Набуття впевненості та зцілення самооцінки
            </li>
          </ul>
        </div>
      </section>
      <Divider>
        Запис на індивідуальні консультації призупинений, <br /> та ви можете
        стати в чергу на розбір
      </Divider>
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </section>
      <Divider>Крім консультацій</Divider>
      <section className={styles.guides}>
        <div className={styles.guidesContainer}>
          {guidesData.map((guide) => (
            <ProductCard
              key={guide.id}
              title={guide.title}
              price={guide.price}
            />
          ))}
        </div>
      </section>
      <Divider>
        Пропрацювання енергій та допомога в розкритті <br /> їх позитивного
        потенціалу
      </Divider>
    </>
  );
};

export default Matrix;
