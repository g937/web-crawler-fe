import request, { Methods } from "../util/request";
import { NewsModel } from "../models/news.model";
import { PaginationModel } from "../models/pagination.model";

class NewsService {
  async getNews({page}:{page:number}) {
    return request<PaginationModel>({ method: Methods.GET, resource: `news?page=${page}` });
  }

  async getOne(id: string) {
    return request<NewsModel>({ resource: `news/${id}`, method: Methods.GET });
  }
}

export const newsService = new NewsService();
