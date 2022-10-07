import { Link } from "react-router-dom";
import "./NewsItem.css";

const NewsItem = ({ news }: any) => {
  return (
    <Link className="item" to={`/news/${news.id}`}>
      <div className="news-item item">
        <img alt={news.title} className="ui image" src={news.coverUrl ? news.coverUrl : '/noImage.png'} />
        <div className="content">
          <div className="header">{news.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
