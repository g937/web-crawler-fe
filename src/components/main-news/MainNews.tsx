import { Link } from "react-router-dom";

import { NewsModel } from "../../models/news.model";
import { formatDate } from "../../date/format-date";
import "./MainNews.css";

interface MainNewsProps {
  main: NewsModel;
}

const MainNews = ({ main}: MainNewsProps) => {
  if (!main) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <Link className="link" to={`/news/${main.id}`}>
      <div className="main-news">
        <div className="picture">
          <img className="image" alt={main?.title} src={main?.coverUrl ? main?.coverUrl : '/no-image.png'} />
        </div>
        <h3 className="main-title">{main?.title}</h3>
        <p className="main-lead">{main?.lead}</p>
        <p className="date">{formatDate(main?.date)}</p>
      </div>
      </Link>
    </div>
  );
};

export default MainNews;