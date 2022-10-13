import "./MainNews.css";

const MainNews = (props: any) => {
  if (!props.main) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <div className="main-segment">
        <div className="picture">
          <img alt={props.main.title} src={props.main.coverUrl} />
        </div>
        <h4 className="ui header">{props.main.title}</h4>
        <p>{props.main.lead}</p>
      </div>
    </div>
  );
};

export default MainNews;