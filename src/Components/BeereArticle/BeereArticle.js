import "./BeereArticle.css";
import { Link, useParams } from "react-router-dom";

import vectorImg from "./../../assets/img/Vector.svg";

const BeereArticle = (props) => {
  let param = useParams();
  param = param["*"] === "" ? "" : param;
  return (
    <article className="beereArticle">
      <img src={props.object.image_url} alt="Img" />
      <div>
        <h2>{props.object.name}</h2>
        <h3>{props.object.description}</h3>
        <p>Created by: {props.object.name}</p>
        {param === "" ? (
          <Link to={`/AllBeers/${props.object._id}`}>Details</Link>
        ) : (
          <Link to={`/AllBeers`}>
            <img src={vectorImg} alt="imgs" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default BeereArticle;
