import React from 'react'
import { Link } from 'react-router-dom'
const ArticleCard = ({ article }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={article.imageUrl} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{article.category}</h6>
        <p className="card-text">{article.summary}</p>
        <Link to={`/article/${article.id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  )
}

export default ArticleCard