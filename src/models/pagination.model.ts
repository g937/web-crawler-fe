import { NewsModel } from "./news.model";

export interface PaginationModel {
    total: number;
    data: NewsModel[];
}