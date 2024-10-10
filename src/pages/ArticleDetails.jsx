import { useParams } from 'react-router-dom'
import useArticle from '../hooks/useArticle'

const ArticleDetails = () => {
  const { id } = useParams()
  const { getArticleById } = useArticle()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          Article not found
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-4" onClick={() => window.history.back()}>Back</button>
      <div className="article-details">
        <div className="article-image d-flex justify-content-center mt-4 mb-4 ">
          <img src={article.imageUrl} className="img-fluid rounded shadow" alt={article.title} />
        </div>
        <div className="article-content">
          <h1 className="article-title">{article.title}</h1>
          <h6 className="article-category text-muted mb-4">{article.category}</h6>
          <p className="article-text">{article.content}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails