import { Link } from "react-router-dom";

import { NewsModel } from "../../models/news.model";
import { formatDate } from "../../date/format-date";
import "./NewsItem.css";

interface NewsItemProps {
  news: NewsModel;
}

const NewsItem = ({ news }: NewsItemProps) => {
  return (
    <Link className="item" to={`/news/${news.id}`}>
      <div className="news-item item">
        <img alt={news.title} className="ui image" src={news.coverUrl ? news.coverUrl : '/no-image.png'} />
        <div className="content">
          <p className="date">{formatDate(news?.date)}</p>
          <h3 className="item-title">{news.title}</h3>
          <p className="item-lead">{news?.lead}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
