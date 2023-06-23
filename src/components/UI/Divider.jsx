import styles from '../../styles/Divider.module.css'

const Divider = (props) => {
    return (
        <section className={styles.divider}>
            <p className={styles.text}>{props.text}</p>
        </section>
    )
}

export default Divider;