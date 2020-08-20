import React from 'react';
import ArticleCard from './ArticleCard'

const Articles = (props) => {


  return (
    <div>
      <div className="articles-body">
        {
          props.result.articles === undefined ?
            null :
            props.result.articles.map(article => {
              return <ArticleCard key={article.publishedAt} article={article} removeArticle={props.removeArticle}/>
            })
        }
      </div>
    </div>
  )
}

export default Articles;
