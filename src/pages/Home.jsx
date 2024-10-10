import { useState, useEffect } from 'react'
import './Home.css'
import ArticleList from '../components/ArticleList'
import useArticle from '../hooks/useArticle'

const categories = ['All', 'Technology', 'Science']
const articlesPerPage = 4
const maxPageNumbers = 5 // Nombre maximum de numéros de page à afficher

const Home = () => {
  const { articles, getArticlesByCategory } = useArticle()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let filtered = selectedCategory === 'All' ? articles : getArticlesByCategory(selectedCategory)
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredArticles(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, articles, getArticlesByCategory])

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  // Calcul des pages à afficher
  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2))
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1)

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1)
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

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

      {filteredArticles.length > 0 && (
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
            {/* Bouton Previous */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Première page si on n'est pas au début */}
            {getPageNumbers()[0] > 1 && (
              <>
                <li className="page-item">
                  <button className="page-link" onClick={() => paginate(1)}>1</button>
                </li>
                {getPageNumbers()[0] > 2 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
              </>
            )}

            {/* Pages numérotées */}
            {getPageNumbers().map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(number)}>
                  {number}
                </button>
              </li>
            ))}

            {/* Dernière page si on n'est pas à la fin */}
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
              <>
                {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}
                <li className="page-item">
                  <button className="page-link" onClick={() => paginate(totalPages)}>
                    {totalPages}
                  </button>
                </li>
              </>
            )}

            {/* Bouton Next */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Home