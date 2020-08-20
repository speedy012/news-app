import React from 'react';


const ArticleCard = (props) => {
  let handleClick = () => {
  window.open(props.article.url)
  }

  return (

      <div className="article-card" >
          <div className="image" onClick={handleClick}>
            <img src={props.article.urlToImage} alt="oh no!"  style={{width: '100%'}}/>
          </div>
          <div className="container">
            <div className="header"> {props.article.title}</div>
          </div>
          <div className="extra content">
            <button type="button" onClick={() =>props.removeArticle(props.article)}>Remove</button>
        </div>
      </div>

  )
}

export default ArticleCard;
