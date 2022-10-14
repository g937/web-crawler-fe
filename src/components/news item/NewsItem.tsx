import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = ({ news }: any) => {
  return (
    <Link className="item" to={`/news/${news.id}`}>
      <div className="news-item item">
        <img alt={news.title} className="ui image" src={news.coverUrl ? news.coverUrl : '/no-image.png'} />
        <div className="content">
          <p className="date">{news?.date}</p>
          <h4 className="header">{news.title}</h4>
          <p className="item-lead">{news?.lead}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
