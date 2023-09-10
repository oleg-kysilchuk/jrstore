import styles from "./ContactForm.module.css";

const Form = (props) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formActions}>
          <div className={styles.ormAction}>
            <label className={styles.formLabel} htmlFor="name">
              Ваше ім'я та прізвище
            </label>
            <input className={styles.formInput} id="name" type="text" />
          </div>
          <div className={styles.formAction}>
            <label className={styles.formLabel} htmlFor="telegram">
              Ваш телеграм (нік або номер телефону)
            </label>
            <input className={styles.formInput} id="telegram" type="text" />
          </div>
          <div className={styles.formAction}>
            <label className={styles.formLabel} htmlFor="instagram">
              Ваш інстаграм
            </label>
            <input className={styles.formInput} id="instagram" type="text" />
          </div>
          {props.workshop && (
            <div className={styles.formAction}>
              <label className={styles.formLabel} htmlFor="workshop">
                Воркшоп, який хочете замовити
              </label>
              <input
                className={styles.formInput}
                id="workshop"
                type="number"
                placeholder="№"
              />
            </div>
          )}
        </div>
        <div className={styles.formControls}>
          <button className={styles.formBtn} type="submit">
            Відправити
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
