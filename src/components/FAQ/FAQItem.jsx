import styles from "./FAQItem.module.css";

const FAQItem = (props) => {
  return (
    <>
      <p
        className={styles.faqQuestion}
        onClick={() => props.toggleFAQ(props.id)}
      >
        {props.question}
      </p>
      <p className={styles.faqAnswer + (props.open ? "open" : "")}>
        {props.answer}
      </p>
      {props.lists
        ? props.lists.map((list, index) => (
            <ul
              key={index}
              className={styles.faqList + (props.open ? "open" : "")}
            >
              {list.map((item, i) => (
                <li className={styles.faqListitem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          ))
        : null}
    </>
  );
};

export default FAQItem;
