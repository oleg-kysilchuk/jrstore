import styles from '../../styles/Divider.module.css'

const Divider = (props) => {
    return (
        <section className={props.thin ? `${styles.divider} ${styles.thin}` : styles.divider}>
            <p className={styles.text}>{props.children}</p>
        </section>
    )
}

export default Divider;