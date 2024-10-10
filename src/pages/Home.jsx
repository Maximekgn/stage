import { useState, useEffect } from 'react'
import './Home.css'
import ArticleList from '../components/ArticleList'
import useArticle from '../hooks/useArticle'

const categories = ['All', 'Technology', 'Science']
const articlesPerPage = 4

const Home = () => {
  const { articles } = useArticle()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const filtered = articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || article.category === selectedCategory)
    )
    setFilteredArticles(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, articles])

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">ARTICLES</h1>
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ArticleList articles={currentArticles} />
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Home