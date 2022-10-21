import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Pagination, PaginationProps } from "semantic-ui-react";

import NewsList from "../../components/news list/NewList";
import { NewsModel } from "../../models/news.model";
import { newsService } from "../../services/news.service";
import MainNews from "../../components/main news/MainNews";
import "./MainPage.css";

const MainPage = () => {
  const [news, setNews] = useState<NewsModel[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState("http://localhost:3001/api/");
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const fetchNews = async (activePage: number) => {
      const result = await newsService.getNews({ page: activePage });
      setNews(result.data);
    };
    navigate(`${pathname}?page=${activePage}`);
    fetchNews(activePage);
  }, [activePage]);

  let main = null;
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
      setApiUrl(
        "http://localhost:3001/api/?page=" + pageInfo.activePage.toString()
      );
    }
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
          onPageChange={(_, data) => onChange(data)}
          totalPages={10}
          ellipsisItem={null}
        />
      </div>
    </div>
  );
};

export default MainPage;
