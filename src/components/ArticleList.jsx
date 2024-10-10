import ArticleCard from './ArticleCard'
import './ArticleList.css'

const ArticleList = ({ articles }) => {
  return (
    <div className='article-list'>
      { articles ? articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      )) : <p>No articles found</p>}
    </div>
  )
}


export default ArticleList