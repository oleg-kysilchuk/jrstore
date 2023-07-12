import styles from './AchievementItem.module.css';

const AchievementItem = (props) => {
    return (
        <div className={styles.achievementItem}>
            <p className={styles.achievementNumbers}>{props.numbers}</p>
            <hr className={styles.line} />
            <p className={styles.achievementText}>{props.text}</p>
        </div>
    )
}

export default AchievementItem;