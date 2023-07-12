import styles from "./FaqItem.module.css";

const FAQItem = (props) => {
  return (
    <>
      <p className={styles.faqQuestion} onClick={() => props.toggleFAQ(props.id)}>{props.question}</p>
      <p className={styles.faqAnswer + (props.open ? 'open' : '')}>{props.answer}</p>
    </>
  );
};

export default FAQItem;
