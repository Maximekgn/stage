import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ArticleDetails from './pages/ArticleDetails'
import { ArticleProvider } from './contexts/ArticleContext'

const App = () => {
  return (
    <ArticleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </Router>
    </ArticleProvider>
  )
}

export default App