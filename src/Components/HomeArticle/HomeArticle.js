import { Link } from "react-router-dom";
import "./HomeArticle.css";

const HomeArticle = (props) => {
  return (
    <article>
      <Link to={props.to}>
        <img src={props.src} alt="Img" />
        {props.title}
      </Link>
      <p>{props.text}</p>
    </article>
  );
};

export default HomeArticle;
