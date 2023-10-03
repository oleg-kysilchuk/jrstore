import styles from './Error.module.css';

const Error = (props) => {
    return (
        <div className={styles.errorMessage}>{props.message}</div>
    )
}

export default Error;