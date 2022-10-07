import './NewsItem.css'

const NewsItem = ({news}: any) => {
  return (
    <div className="news-item item">
      <img className="ui image" src={news.coverUrl} />
      <div className="content">
        <div className="header">
          {news.title}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;