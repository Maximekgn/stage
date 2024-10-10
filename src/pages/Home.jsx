import { useState, useEffect, useMemo } from 'react'
import ArticleList from '../components/ArticleList'
import useArticle from '../hooks/useArticle'
import Pagination from '../components/Pagination'

const ARTICLES_PER_PAGE = 4

const Home = () => {
  const { articles, searchArticles } = useArticle()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState(['All'])

  // Extraire les catégories uniques des articles
  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(articles.map(article => article.category))]
    setCategories(uniqueCategories)
  }, [articles])

  // Filtrer les articles en fonction de la recherche et de la catégorie
  const filteredArticles = useMemo(() => {
    return searchArticles(searchTerm, selectedCategory)
  }, [searchTerm, selectedCategory, searchArticles])

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)

  // Obtenir les articles pour la page actuelle
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
    return filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
  }, [currentPage, filteredArticles])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <ArticleList articles={currentArticles} />

      {filteredArticles.length > 0 && (
        <div className='text-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default Home