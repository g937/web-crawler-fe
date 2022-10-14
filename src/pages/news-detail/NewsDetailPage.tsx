import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewsModel } from "../../models/news.model";
import { newsService } from "../../services/news.service";
import './NewsDetail.css';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsModel>();

  useEffect(() => {
    const fetchNews = async (id: string) =>
    setNews(await newsService.getOne(id));
    if (id) {
      fetchNews(id);
    }
  }, [id]);

  return (
    <div>
      <div className="main-segment">
        <h4 className="ui-header">{news?.title}</h4>
        <div className="picture">
          <img alt={news?.title} src={news?.coverUrl ? news.coverUrl : '/noImage.png'} />
        </div>
        <h3 className="lead">{news?.lead}</h3>
        <p className="content">{news?.content}</p>
        <h5>Az eredeti cikk a következő linken található: <a href={news?.link}>{news?.link}</a></h5>
        <p className="date">{news?.date}</p>
      </div>
    </div>
  )
};

export default NewsDetailPage;