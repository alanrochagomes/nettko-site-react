import React from "react";
import newsArticles from "../../../../data/newsData";
import "../news/news.component.css";

const NewsComponent = () => {
  return (
    <div className="news-container">
      <h1>Notícias sobre Games</h1>
      {newsArticles.map((article) => (
        <div key={article.id} className="news-article">
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <small>{article.date}</small>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
