import EsotericCards from "../components/Esoteric/EsotericCards/EsotericCards";
import EsoreticCardsSmall from "../components/Esoteric/EsotericCardsSmall/EsotericCardsSmall";
import EsotericProducts from "../components/Esoteric/EsotericProducts/EsotericProducts";
import EsotericWorkplan from "../components/Esoteric/EsotericWorkplan/EsotericWorkplan";
import Footer from "../components/Footer/Footer";
import * as esotericPageData from "../components/util/esotericPage-data";
import { esotericProducts } from "../components/util/products-data";
import styles from "../styles/Esoteric.module.css";

const Esoteric = () => {
  return (
    <>
      <section id="heading" className={styles.sectionHeading}>
        <div className={styles.sectionMask}>
          <h1 className={styles.titleWhite}>Езотерикиня</h1>
        </div>
      </section>
      <EsotericCards data={esotericPageData.clients}/>
      <section className={styles.sectionPink}>
        <svg
          width="120px"
          height="15px"
          role="presentation"
          className={styles.svgIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 12"
        >
          <path d="M62.3 12L50 3.5 37.7 12 25.4 3.5 13.1 12 0 2.9 1.7.6l11.4 7.9L25.4 0l12.3 8.5L50 0l12.3 8.5L74.6 0l12.3 8.5L98.3.6l1.7 2.3L86.9 12 74.6 3.5"></path>
        </svg>
        <p className={styles.sectionpinkText}>
          Це не курс по smm. Це досвід езотерикині, якій <br />
          вдалося монетизувати своє захоплення
        </p>
        <svg
          width="120px"
          height="15px"
          role="presentation"
          className={styles.svgIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 12"
        >
          <path d="M62.3 12L50 3.5 37.7 12 25.4 3.5 13.1 12 0 2.9 1.7.6l11.4 7.9L25.4 0l12.3 8.5L50 0l12.3 8.5L74.6 0l12.3 8.5L98.3.6l1.7 2.3L86.9 12 74.6 3.5"></path>
        </svg>
      </section>
      <EsoreticCardsSmall data={esotericPageData.esoteric} title="Езотерикиня - це" />
      <EsotericWorkplan data={esotericPageData.workplan} />
      <EsoreticCardsSmall data={esotericPageData.experts} title="Запрошені Експерти" />
      <EsotericProducts data={esotericProducts} title="Варіанти Участі" />
      <EsoreticCardsSmall data={esotericPageData.bonuses} title="Бонуси" />
      <section className={styles.sectionInfo}>
        <div className={styles.itemsContainer}>
          <div className={styles.infoItem}>
            <p className={styles.itemQuestion}>Де?</p>
            <p className={styles.itemText}>В закритому телеграм-каналі</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.itemQuestion}>Який формат?</p>
            <p className={styles.itemText}>
              Подкасти виходитимуть в форматі аудіо. Бонусні вебінари та лекції
              - відео.
            </p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.itemQuestion}>Як довго буде доступ?</p>
            <p className={styles.itemText}>Доступ назавжди</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Esoteric;
