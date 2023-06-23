import { NavLink } from "react-router-dom";
import styles from "../../styles/HomepageCard.module.css";
import ButtonLink from "../UI/ButtonLink";

const HomepageCard = (props) => {
  return (
    <div>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <NavLink to={props.to}>
        <ButtonLink
          type="button"
          onClick={() => console.log("details button from home page")}
        >
          Детальніше
        </ButtonLink>
      </NavLink>
    </div>
  );
};

export default HomepageCard;
