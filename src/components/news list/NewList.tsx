import { NewsModel } from "../../models/news.model";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = (props: any) => {
    const renderedList = props.news.map((news: NewsModel) => {
        return <NewsItem news={news}/>
    })
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default NewsList;