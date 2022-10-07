import { useEffect, useState } from "react";

import NewsList from "../components/news list/NewList";
import { NewsModel } from "../models/news.model";
import { newsService } from "../services/news.service";

const MainPage = () => {
  const [news, setNews] = useState<NewsModel[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      setNews(await newsService.getNews());
    };

    fetchNews();
  }, []);

  return <NewsList news={news}/>;
};

export default MainPage;