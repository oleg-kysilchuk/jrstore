import styles from '../../styles/Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.formActions}>
                <div className={styles.ormAction}>
                    <label className={styles.formLabel} htmlFor="name">Ваше ім'я та прізвище</label>
                    <input className={styles.formInput} id='name' type="text" />
                </div>
                <div className={styles.formAction}>
                    <label className={styles.formLabel} htmlFor="telegram">Ваш телеграм (нік або номер телефону)</label>
                    <input className={styles.formInput} id='telegram' type="text" />
                </div>
                <div className={styles.formAction}>
                    <label className={styles.formLabel} htmlFor="instagram">Ваш інстаграм</label>
                    <input className={styles.formInput} id='instagram' type="text" />
                </div>
            </div>
            <div className={styles.formControls}>
                <button className={styles.formBtn} type='submit'>Відправити</button>
            </div>
        </form>
    )
}

export default Form;