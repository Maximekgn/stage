import { useState, useEffect, useCallback } from 'react';

const useArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Articles de test
    const fetchedArticles = [
      {
        id: 1,
        title: 'The Future of AI',
        summary: 'Exploring the potential impacts of artificial intelligence on society.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        title: 'Climate Change: A Global Crisis',
        summary: 'Examining the current state of climate change and its effects on our planet.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Science',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        title: 'The Rise of Quantum Computing',
        summary: 'Understanding the principles and potential applications of quantum computing.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        id: 4,
        title: 'Exploring Mars: The Red Planet',
        summary: 'Recent discoveries and future plans for Mars exploration.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Science',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 5,
        title: 'Blockchain and Cryptocurrency',
        summary: 'Understanding the technology behind blockchain and its applications in cryptocurrency.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 6,
        title: 'The Human Genome Project',
        summary: 'Exploring the achievements and implications of mapping the human genome.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Science',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ];
    setArticles(fetchedArticles);
  }, []); 

  const getArticleById = useCallback((id) => {
    return articles.find(article => article.id === parseInt(id));
  }, [articles]);

  const searchArticles = useCallback((searchTerm, category) => {
    return articles.filter(article => 
      (category === 'All' || article.category === category) &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       article.summary.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [articles]);

  return { articles, getArticleById, searchArticles };
};

export default useArticle;
