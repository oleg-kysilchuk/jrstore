import styles from "./FAQItem.module.css";

const FAQItem = (props) => {
  let open = props.open ? "open" : "";

  const openOnKey = (e) => {
    if(e.keyCode === 13) {
      props.toggleFAQ(props.id)
    } else {
      return
    }
  }
  
  return (
    <>
      <p
        className={styles.faqQuestion}
        onClick={() => props.toggleFAQ(props.id)}
        onKeyUp={openOnKey}
        tabIndex='0'
      >
        {props.question}
      </p>
      <p
        style={{
          fontSize: "17px",
          fontWeight: 400,
          lineHeight: 1.5,
          padding: "10px 0 0",
          marginBottom: "30px",
        }}
        className={`${styles.faqAnswer}${open}`}
      >
        {props.answer}
      </p>
      {props.lists
        ? props.lists.map((list, index) => (
            <ul
              style={{ marginBottom: "30px" }}
              key={index}
              className={`${styles.faqList}${open}`}
            >
              {list.map((item, i) => (
                <li
                  className={styles.faqListitem}
                  key={i}
                  style={{
                    marginBottom: "7px",
                    fontWeight: list.length !== 7 && i === 0 ? "700" : '400',  //???????????????????????
                  }}
                >
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
