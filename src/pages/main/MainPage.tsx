import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PaginationProps } from "semantic-ui-react";

import { NewsModel } from "../../models/news.model";
import { newsService } from "../../services/news.service";
import NewsList from "../../components/news-list/NewsList";
import MainNews from "../../components/main-news/MainNews";
import Pagination from "../../components/pagination/Pagination";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [news, setNews] = useState<NewsModel[]>([]);
  const [activePage, setActivePage] = useState(
    search !== "" ? parseInt(search.split("=")[1]) : 1
  );

  useEffect(() => {
    const fetchNews = async (activePage: number) => {
      const result = await newsService.getNews({ page: activePage });
      setNews(result.data);
    };
    navigate(`${pathname}?page=${activePage}`);
    fetchNews(activePage);
  }, [activePage]);

  let main: NewsModel = news[0];
  let rest: NewsModel[] = [];

  if (activePage === 1 && news.length) {
    main = news[0];
    rest = news.slice(1);
  } else {
    rest = news;
  }

  const onChange = (pageInfo: PaginationProps) => {
    if (pageInfo.activePage) {
      const page =
        typeof pageInfo.activePage === "string"
          ? Number.parseInt(pageInfo.activePage, 10)
          : pageInfo.activePage;
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {activePage === 1 ? (
        <div>
          <MainNews main={main} />
          <NewsList news={rest} />
        </div>
      ) : (
        <div>
          <NewsList news={rest} />
        </div>
      )}
      <div className="pages">
        <Pagination
          activePage={activePage}
          onPageChange={(e:any, data:any) => onChange(data)}
          totalPages={10}
        />
      </div>
    </div>
  );
};

export default MainPage;
