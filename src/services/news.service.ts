import request, { Methods } from "../util/request";
import { NewsModel } from "../models/news.model";

class NewsService {
  async getNews() {
    return request<NewsModel[]>({ method: Methods.GET, resource: "news" });
  }

  async getNew(id: string) {
    return request<NewsModel>({ resource: `news/${id}`, method: Methods.GET });
  }
}

export const newsService = new NewsService();
