import { Link } from "react-router-dom";
import "./MainNews.css";

const MainNews = (props: any) => {
  if (!props.main) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <Link className="link" to={`/news/${props.main.id}`}>
      <div className="main-news">
        <div className="picture">
          <img className="image" alt={props.main?.title} src={props.main?.coverUrl ? props.main?.coverUrl : '/no-image.png'} />
        </div>
        <h3 className="ui header">{props.main?.title}</h3>
        <p>{props.main?.lead}</p>
        <p className="date">{props.main?.date}</p>
      </div>
      </Link>
    </div>
  );
};

export default MainNews;