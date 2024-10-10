import React from 'react'
import { useParams } from 'react-router-dom'
import useArticle from '../hooks/useArticle'

const ArticleDetails = () => {
  const { id } = useParams()
  const { getArticleById } = useArticle()
  const article = getArticleById(id)

  if (!article) {
    return <div className="container mt-5">
      <div className="alert alert-warning" role="alert">
        Article not found
      </div>
    </div>
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={() => window.history.back()}>Back</button>
     <div className="row">
      <div className="col-6">
        <img src={article.imageUrl} className="card-img-top" alt={article.title} />
      </div>
      <div className="col-6">
        <h1 className="card-title">{article.title}</h1>
        <h6 className="card-subtitle mb-2 text-muted">{article.category}</h6>
      </div>
     </div>
     <div className="row">
       <p className="card-text">{article.content}</p>
     </div>
    </div>
  )
}

export default ArticleDetails