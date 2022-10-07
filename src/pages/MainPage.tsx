import { useEffect, useState } from "react";

import NewsList from "../components/news list/NewList";
import { NewsModel } from "../models/news.model";
import { newsService } from "../services/news.service";
import MainNews from "../components/main news/MainNews";

const MainPage = () => {
  const [news, setNews] = useState<NewsModel[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      setNews(await newsService.getNews());
    };

    fetchNews();
  }, []);

  const main = news[0];

  return (
    <div>
      <MainNews main={main} />
      <NewsList news={news} />
    </div>
  );
};

export default MainPage;
